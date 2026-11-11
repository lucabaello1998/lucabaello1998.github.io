import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'docs', 'verify');
mkdirSync(outDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9222;
const baseUrl = 'http://127.0.0.1:8960';
const VW = 1280;
const VH = 900;

async function waitForDebug() {
  for (let i = 0; i < 30; i++) {
    try {
      const list = await fetch(`http://127.0.0.1:${port}/json/list`).then((r) => r.json());
      const page = list.find((p) => p.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error('Chrome no respondió a tiempo');
}

async function cdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });
  let id = 0;
  const pending = new Map();
  const listeners = [];
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data.toString());
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
    if (msg.method) listeners.forEach((fn) => fn(msg));
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      id++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const on = (fn) => listeners.push(fn);
  return { send, on, close: () => ws.close() };
}

async function screenshot(lang) {
  const wsUrl = await waitForDebug();
  const { send, on, close } = await cdp(wsUrl);

  const logs = [];
  const failures = [];

  await send('Runtime.enable');
  await send('Page.enable');
  await send('Log.enable');
  await send('Network.enable');

  on((msg) => {
    if (msg.method === 'Runtime.consoleAPICalled') {
      const text = msg.params.args.map((a) => a.value ?? a.description ?? '').join(' ');
      logs.push(`[console] ${text}`);
    }
    if (msg.method === 'Log.entryAdded') {
      const entry = msg.params.entry;
      logs.push(`[log] ${entry.level}: ${entry.text}`);
    }
    if (msg.method === 'Network.responseReceived') {
      const { response } = msg.params;
      if (response.status >= 400) failures.push(`${response.status} ${response.url}`);
    }
  });

  await send('Emulation.setDeviceMetricsOverride', {
    width: VW,
    height: VH,
    deviceScaleFactor: 1,
    mobile: false,
  });

  await send('Page.navigate', { url: `${baseUrl}/?lang=${lang}` });
  await sleep(2000);

  // Scroll a #projects y forzar reveal
  const scrollRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
        document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible'));
        return { scrollY: window.scrollY, htmlClass: document.documentElement.className, theme: document.documentElement.dataset.theme };
      })()
    `,
    returnByValue: true,
  });
  console.log(`[${lang}] scroll info:`, JSON.stringify(scrollRes.result.value));

  await sleep(1200);

  const shot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  const file = join(outDir, `projects-${lang}.png`);
  writeFileSync(file, Buffer.from(shot.data, 'base64'));

  // Segunda captura: tarjetas nuevas (job-radar y siguientes)
  await send('Runtime.evaluate', {
    expression: `
      const target = document.querySelector('[data-i18n="projects.jobradar.kind"]');
      if (target) target.closest('.project').scrollIntoView({ block: 'start', behavior: 'instant' });
      'ok'
    `,
  });
  await sleep(800);
  const shot2 = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  const file2 = join(outDir, `projects-${lang}-nuevos.png`);
  writeFileSync(file2, Buffer.from(shot2.data, 'base64'));

  close();
  return { file, file2, logs, failures };
}

const chrome = spawn(
  chromePath,
  [
    `--remote-debugging-port=${port}`,
    '--headless=old',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--force-color-profile=srgb',
    '--window-size=1280,900',
    'about:blank',
  ],
  { stdio: 'ignore' }
);

await sleep(1500);

try {
  const es = await screenshot('es');
  await sleep(300);
  const en = await screenshot('en');

  console.log('ES screenshot:', es.file);
  console.log('EN screenshot:', en.file);

  const allFailures = [...es.failures, ...en.failures];
  const allLogs = [...es.logs, ...en.logs];

  console.log('\n-- Fallos HTTP (404+) --');
  console.log(allFailures.length ? allFailures.join('\n') : 'Ninguno');

  console.log('\n-- Logs de consola --');
  console.log(allLogs.length ? allLogs.join('\n') : 'Ninguno');

  if (allFailures.length) process.exit(1);
  console.log('\nVerificación OK: sin 404, ES/EN capturados.');
} finally {
  chrome.kill();
}
