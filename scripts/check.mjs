// Verificación del portfolio sin dependencias: se corre con `node scripts/check.mjs`.
//
// Cubre las tres formas en que este sitio se rompe en silencio, porque no hay
// build que falle ni test que lo note:
//
//   1. Una clave `data-i18n` que no existe en el diccionario: el texto queda
//      como la clave cruda en pantalla ("hero.lead" en vez de la frase).
//   2. Una clave presente en un idioma y no en el otro: al cambiar de idioma
//      se mezclan los dos.
//   3. Un `href`/`src` local que no existe: 404 en producción, invisible en
//      local si el archivo está en la carpeta.
//
// Además: ids duplicados (rompen los anchors y los querySelector) y que los dos
// CV existan y sean PDF de verdad.

import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const leer = (rel) => readFileSync(join(raiz, rel), 'utf8');

let fallas = 0;
const ok = (nombre, cond, detalle = '') => {
  if (cond) {
    console.log('  ok   ', nombre);
  } else {
    fallas++;
    console.log('  FALLA', nombre, detalle ? '-> ' + detalle : '');
  }
};

const html = leer('index.html');
const app = leer('assets/app.js');

// --- diccionarios ------------------------------------------------------------
// El objeto I18N se extrae y se evalúa solo, sin DOM: el resto del archivo toca
// `document`, así que no se puede cargar entero.
const inicio = app.indexOf('const I18N = ');
const fin = app.indexOf('\n};', inicio);
if (inicio < 0 || fin < 0) {
  console.log('  FALLA no se pudo extraer I18N de assets/app.js');
  process.exit(1);
}
const literal = app.slice(inicio + 'const I18N = '.length, fin + 2);
const I18N = new Function('return ' + literal)();

console.log('== diccionarios ==');
ok('hay español e inglés', !!I18N.es && !!I18N.en);

const clavesEs = Object.keys(I18N.es).sort();
const clavesEn = Object.keys(I18N.en).sort();
const soloEs = clavesEs.filter((k) => !(k in I18N.en));
const soloEn = clavesEn.filter((k) => !(k in I18N.es));
ok('es y en tienen las mismas claves', !soloEs.length && !soloEn.length,
  `solo en es: ${soloEs.join(', ') || '-'} · solo en en: ${soloEn.join(', ') || '-'}`);

const vacias = [...clavesEs, ...clavesEn].filter((k) => {
  const v = I18N.es[k] ?? I18N.en[k];
  return typeof v === 'string' && !v.trim();
});
ok('ninguna cadena quedó vacía', vacias.length === 0, vacias.join(', '));

// --- claves usadas en el HTML ------------------------------------------------
console.log('\n== html ==');
const usadas = new Set();
for (const m of html.matchAll(/data-i18n(?:-[\w-]+)?="([^"]+)"/g)) usadas.add(m[1]);
const faltanEs = [...usadas].filter((k) => !(k in I18N.es));
const faltanEn = [...usadas].filter((k) => !(k in I18N.en));
ok(`${usadas.size} claves data-i18n existen en los dos idiomas`,
  !faltanEs.length && !faltanEn.length,
  `faltan en es: ${faltanEs.join(', ') || '-'} · en en: ${faltanEn.join(', ') || '-'}`);

const sinUsar = clavesEs.filter((k) => !usadas.has(k) && !k.startsWith('meta.'));
console.log('  info  claves sin uso en el HTML:', sinUsar.length ? sinUsar.join(', ') : 'ninguna');

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
const repetidos = ids.filter((id, i) => ids.indexOf(id) !== i);
ok('no hay ids duplicados', repetidos.length === 0, [...new Set(repetidos)].join(', '));

const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
const locales = [...new Set(refs)].filter((r) => !/^(?:https?:|mailto:|tel:|data:|#)/.test(r));
const faltanArchivos = locales.filter((r) => !existsSync(join(raiz, r.split('#')[0].split('?')[0])));
ok(`${locales.length} referencias locales existen`, faltanArchivos.length === 0, faltanArchivos.join(', '));

// --- CVs ---------------------------------------------------------------------
console.log('\n== cv ==');
for (const pdf of ['cv/CV_Luca_Baello_ES_Fullstack.pdf', 'cv/CV_Luca_Baello_EN_Fullstack.pdf']) {
  const ruta = join(raiz, pdf);
  const existe = existsSync(ruta);
  const cabecera = existe ? readFileSync(ruta).subarray(0, 5).toString('latin1') : '';
  ok(`${pdf} es un PDF`, existe && cabecera === '%PDF-',
    existe ? `cabecera "${cabecera}"` : 'no existe');
  if (existe) console.log('  info  ', Math.round(statSync(ruta).size / 1024), 'KB');
}

console.log('\n' + '='.repeat(60));
console.log(fallas === 0 ? '  Todo en orden.' : `  ${fallas} problema(s).`);
process.exit(fallas === 0 ? 0 : 1);
