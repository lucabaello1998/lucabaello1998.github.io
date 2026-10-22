/* ==========================================================================
   Luca Baello — Portfolio
   i18n, tema, animaciones y micro-interacciones. Sin dependencias.
   ========================================================================== */

const I18N = {
  es: {
    'meta.title': 'Luca Baello — Full Stack Engineer',
    'meta.description':
      'Full Stack Engineer con 5 años de experiencia: React / Next.js y .NET 8, arquitecturas limpias, PostGIS, tiempo real y productos móviles. Buenos Aires, Argentina.',
    'a11y.skip': 'Saltar al contenido',
    'brand.role': 'Full Stack Engineer',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.stack': 'Stack',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',

    'hero.status': 'Abierto a nuevas oportunidades',
    'hero.title1': 'Construyo productos',
    'hero.title2': 'de punta a punta.',
    'hero.role': 'Full Stack Engineer',
    'hero.lead':
      'Cinco años pasando de la consulta SQL lenta a la pantalla que el usuario ve rápido: React / Next.js arriba, C# / .NET 8 abajo, y bases de datos que aguantan producción.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV',
    'hero.remote': 'Remoto · Híbrido',
    'hero.stackShort': 'React · .NET · PostgreSQL',
    'hero.badge': '5 años en producción',

    'metrics.years': 'años construyendo software en producción',
    'metrics.delivery': 'de entrega: 749 de 769 work items',
    'metrics.bundle': 'del bundle inicial de la SPA (1,4 MB a 533 KB)',
    'metrics.modules': 'módulos de gestión en operación activa',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Del problema al sistema que lo resuelve.',
    'about.p1':
      'Soy desarrollador Full Stack con cinco años construyendo sistemas productivos de punta a punta: portales de logística, PWAs offline-first, ERPs y marketplaces. Me muevo cómodo tanto escribiendo un índice que baja una consulta de 13 a 6 queries como diseñando la pantalla donde esa consulta se vuelve útil.',
    'about.p2':
      'Trabajo con React 19 / Next.js y C# / .NET 8, con Clean Architecture, CQRS y tests como red de seguridad. Me interesa la parte que casi no se ve: autenticación que no se rompe, migraciones que no duelen y un pipeline que despliega sin que nadie mire el reloj.',
    'about.p3':
      'También construyo herramientas para desarrollar con IA: agentes, monitoreo de costos de tokens y automatizaciones que me sacan trabajo repetitivo del medio.',

    'facts.location': 'GMT-3 · abierto a remoto',
    'facts.edu': 'Lic. en Informática (en curso)',
    'facts.langs': 'Español nativo · Inglés B1/B2',
    'facts.langsSub': 'documentación y charlas técnicas',
    'facts.focus': 'Foco actual',
    'facts.focusSub': 'productos propios + IA aplicada',

    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Lo que construí y puedo mostrar.',
    'projects.lead':
      'Tres productos propios en marcha y dos sistemas de empresa donde el código no es público. Cada tarjeta dice qué problema resuelve y qué decisión técnica tuvo más peso.',
    'projects.site': 'Ver sitio',
    'projects.code': 'Código',
    'projects.download': 'Descargar',
    'projects.askMe': 'Pedime el detalle',

    'projects.fletar.kind': 'En vivo',
    'projects.fletar.tagline': 'Marketplace de fletes con subasta a ciegas y seguimiento en vivo',
    'projects.fletar.desc':
      'App Flutter y API .NET 8: publicás una carga en el mapa, los fleteros ofertan sin ver las ofertas de los demás, el dueño acepta y el viaje se sigue por GPS. Autenticación con refresh token rotativo, chat por oferta y verificación de identidad con documentos en un circuito privado.',
    'projects.fletar.h1': 'PostGIS + ST_DWithin para cercanía real',
    'projects.fletar.h2': 'SignalR para tracking y chat',
    'projects.fletar.h3': 'Autocompletado de direcciones ⇄ mapa',

    'projects.opencockpit.kind': 'Open source',
    'projects.opencockpit.tagline': 'Dashboard local-first para el costo real de las herramientas de IA',
    'projects.opencockpit.desc':
      'App de escritorio (Electron + React) que lee lo que Claude Code, OpenCode, Codex, Gemini, Copilot, Cursor y Cline dejan en disco, y lo unifica en un panel de sesiones, tokens, costos y conversaciones. Sin backend ni telemetría: los números se calculan localmente y los datos no salen de la máquina.',
    'projects.opencockpit.h1': 'Deduplicación por message.id / requestId',
    'projects.opencockpit.h2': 'Subagentes sumados a la sesión raíz',
    'projects.opencockpit.h3': '7 fuentes de datos distintas, un solo panel',

    'projects.tms.kind': 'Empresa · código privado',
    'projects.tms.tagline': 'Planificación de rutas y trazabilidad para operación real',
    'projects.tms.desc':
      'Monorepo con más de 50 módulos en producción: planificador visual de rutas con mapa interactivo y reordenamiento de entregas, trazabilidad satelital de transportistas y una app para choferes y depósito. Acá se juntaron las tres partes: base de datos, backend y UI.',
    'projects.tms.h1': '13 → 6 queries por transacción',
    'projects.tms.h2': '41 → 2 requests por pantalla (sin N+1)',
    'projects.tms.h3': '86 merges de entorno, 705 commits propios',

    'projects.rem.kind': 'Empresa · misión crítica',
    'projects.rem.tagline': 'Expedientes médicos con firma digital y aprobaciones multi-nivel',
    'projects.rem.desc':
      'Sistema regulatorio en .NET 8 + React + shadcn/ui para la industria farmacéutica: trazabilidad completa de expedientes, tres bases de datos coordinadas, visualización nativa de PDF y un flujo de aprobación que no admite atajos.',
    'projects.rem.h1': 'Auditoría transaccional estricta',
    'projects.rem.h2': 'Firma digital de aprobaciones',

    'projects.dirs.tagline': 'Autocompletado de direcciones argentinas, como paquete de Dart',
    'projects.dirs.desc':
      'La pieza de geocoding de FletAR, extraída como librería reutilizable sobre Nominatim: caché LRU, cola de una request por segundo y un parser que devuelve calle, altura, barrio y localidad ya separados. CI con tests en cada push.',
    'projects.dirs.h1': '17 tests sin tocar el servicio real',
    'projects.dirs.h2': '“Sin resultados” ≠ “falló el servicio”',

    'projects.glass.kind': 'Experimento',
    'projects.glass.tagline': 'Refracción de vidrio líquido en tiempo real, sin pre-render',
    'projects.glass.desc':
      'Contador y lista con drag & drop donde el vidrio refracta lo que hay detrás. El efecto se calcula en runtime con feDisplacementMap y un mapa de distancias firmado generado en el navegador, en vez de usar una imagen de fondo.',
    'projects.glass.h1': 'SDF + displacement map generados al vuelo',
    'projects.glass.h2': 'React 19 + Tailwind v4 + dnd-kit',

    'experience.eyebrow': 'Experiencia',
    'experience.title': 'Cinco años, cuatro equipos.',
    'experience.lead':
      'De soporte de redes a liderar el frontend y el backend de sistemas que usa gente todos los días.',

    'jobs.ceta.role': 'Desarrollador Full Stack Semi-Senior',
    'jobs.ceta.when': 'Ago 2024 — Sep 2026',
    'jobs.ceta.b1': 'Logística (TMS/WMS): planificador visual de rutas, reordenamiento dinámico de entregas y picking atómico para varios operarios a la vez.',
    'jobs.ceta.b2': 'Seguridad: esquema JWT de la organización con refresh rotativo y revocación. Detecté y corregí una vulnerabilidad de timing attack: de 46 ms a 0,77 ms, con tests automatizados.',
    'jobs.ceta.b3': 'Performance: 13 → 6 queries por transacción y 41 → 2 requests por pantalla, eliminando retardos por N+1.',
    'jobs.ceta.b4': 'PWA offline-first: fichaje de colaboradores con biometría, cámara, georreferencia y sincronización ante pérdida de conexión.',
    'jobs.ceta.b5': 'DevOps: pipelines YAML en Azure DevOps para pruebas y producción, 86 merges de entorno y 705 commits propios.',

    'jobs.unahur.role': 'Desarrollador Full Stack',
    'jobs.unahur.when': 'Mar 2023 — Oct 2023',
    'jobs.unahur.b1': 'Aplicaciones web institucionales para dependencias públicas y clientes del sector privado.',
    'jobs.unahur.b2': 'Módulos frontend en React y Tailwind CSS; servicios backend en Node.js, Express, PHP y MySQL con Sequelize.',

    'jobs.telecentro.role': 'Soporte Técnico N1/N2/N3 — Especialista de Redes',
    'jobs.telecentro.when': 'Oct 2023 — Ago 2024',
    'jobs.telecentro.b1': 'Diagnóstico de incidencias complejas de conectividad: routing, switches, redes Wi-Fi mesh, IPv4/IPv6 y FTTH/coaxial.',
    'jobs.telecentro.b2': 'Atención avanzada a clientes residenciales y corporativos con cumplimiento estricto de SLA.',

    'jobs.claro.role': 'Coordinador de Proyectos Corporativos',
    'jobs.claro.when': 'Jun 2022 — Mar 2023',
    'jobs.claro.b1': 'Plataforma CRM a medida en PHP, SQL y jQuery para seguimiento y asignación de órdenes técnicas.',
    'jobs.claro.b2': 'Scripts de automatización en Python que redujeron 40% el tiempo de reportes administrativos y conciliaciones.',

    'stack.eyebrow': 'Stack',
    'stack.title': 'Con qué trabajo.',
    'stack.lead': 'Herramientas que usé en producción, no las que leí en un tutorial.',
    'stack.frontend': 'Frontend',
    'stack.backend': 'Backend',
    'stack.data': 'Datos',
    'stack.cloud': 'Cloud & DevOps',
    'stack.mobile': 'Mobile',
    'stack.ai': 'IA aplicada',

    'edu.degree': 'Licenciatura en Informática',
    'edu.badge': 'En curso',
    'edu.desc': 'Algoritmos, estructuras de datos, diseño de sistemas concurrentes y bases de datos relacionales.',
    'eng.title': 'Idiomas',
    'eng.es': 'Español — nativo',
    'eng.en': 'Inglés — B1/B2 profesional: conversaciones técnicas, lectura fluida de documentación y redacción de issues y PRs.',

    'contact.eyebrow': 'Contacto',
    'contact.title': '¿Buscás alguien que cierre el círculo entre frontend y backend?',
    'contact.desc': 'Estoy disponible para roles full stack, semi-senior o senior, en relación de dependencia o por proyecto. Respondo en el día.',
    'contact.copy': 'Copiar email',
    'contact.copied': '¡Copiado!',
    'contact.apk': 'Probar FletAR (APK)',
    'contact.cv': 'CV en PDF',

    'footer.made': 'Hecho a mano: HTML, CSS y JavaScript. Sin frameworks.',
    'footer.top': 'Volver arriba ↑',
  },

  en: {
    'meta.title': 'Luca Baello — Full Stack Engineer',
    'meta.description':
      'Full Stack Engineer with 5 years of experience: React / Next.js and .NET 8, clean architecture, PostGIS, real-time systems and mobile products. Buenos Aires, Argentina.',
    'a11y.skip': 'Skip to content',
    'brand.role': 'Full Stack Engineer',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.stack': 'Stack',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.status': 'Open to new opportunities',
    'hero.title1': 'I build products',
    'hero.title2': 'end to end.',
    'hero.role': 'Full Stack Engineer',
    'hero.lead':
      'Five years moving from the slow SQL query to the screen the user sees fast: React / Next.js on top, C# / .NET 8 underneath, and databases that hold up in production.',
    'hero.ctaProjects': 'See projects',
    'hero.ctaCv': 'Download CV',
    'hero.remote': 'Remote · Hybrid',
    'hero.stackShort': 'React · .NET · PostgreSQL',
    'hero.badge': '5 years in production',

    'metrics.years': 'years building software in production',
    'metrics.delivery': 'delivery rate: 749 of 769 work items',
    'metrics.bundle': 'initial SPA bundle (1.4 MB down to 533 KB)',
    'metrics.modules': 'management modules running in production',

    'about.eyebrow': 'About',
    'about.title': 'From the problem to the system that solves it.',
    'about.p1':
      'I am a Full Stack developer with five years building production systems end to end: logistics portals, offline-first PWAs, ERPs and marketplaces. I am equally comfortable writing the index that takes a query from 13 down to 6 roundtrips and designing the screen where that query becomes useful.',
    'about.p2':
      'I work with React 19 / Next.js and C# / .NET 8, using Clean Architecture, CQRS and tests as a safety net. I care about the part you barely see: authentication that does not break, migrations that do not hurt, and a pipeline that deploys without anyone watching the clock.',
    'about.p3':
      'I also build tooling for AI-assisted development: agents, token cost monitoring and automations that take repetitive work off the table.',

    'facts.location': 'GMT-3 · open to remote',
    'facts.edu': 'B.S. in Computer Science (in progress)',
    'facts.langs': 'Spanish native · English B1/B2',
    'facts.langsSub': 'documentation and technical conversations',
    'facts.focus': 'Current focus',
    'facts.focusSub': 'own products + applied AI',

    'projects.eyebrow': 'Projects',
    'projects.title': 'What I built and can show.',
    'projects.lead':
      'Three products of my own and two company systems where the code is not public. Each card states the problem it solves and the technical decision that mattered most.',
    'projects.site': 'Visit site',
    'projects.code': 'Code',
    'projects.download': 'Download',
    'projects.askMe': 'Ask me for details',

    'projects.fletar.kind': 'Live',
    'projects.fletar.tagline': 'Freight marketplace with blind bidding and live tracking',
    'projects.fletar.desc':
      'Flutter app plus a .NET 8 API: you post a load on the map, carriers bid without seeing each other’s offers, the owner accepts and the trip is tracked by GPS. Rotating refresh-token auth, per-offer chat and identity verification with documents kept in a private circuit.',
    'projects.fletar.h1': 'PostGIS + ST_DWithin for real distances',
    'projects.fletar.h2': 'SignalR for tracking and chat',
    'projects.fletar.h3': 'Address autocomplete ⇄ map, both ways',

    'projects.opencockpit.kind': 'Open source',
    'projects.opencockpit.tagline': 'Local-first dashboard for the real cost of AI tools',
    'projects.opencockpit.desc':
      'Desktop app (Electron + React) that reads what Claude Code, OpenCode, Codex, Gemini, Copilot, Cursor and Cline write to disk, and unifies it into one panel of sessions, tokens, cost and conversations. No backend, no telemetry: numbers are computed locally and nothing leaves the machine.',
    'projects.opencockpit.h1': 'Deduplication by message.id / requestId',
    'projects.opencockpit.h2': 'Subagent usage folded into the root session',
    'projects.opencockpit.h3': '7 different data sources, one panel',

    'projects.tms.kind': 'Company · private code',
    'projects.tms.tagline': 'Route planning and traceability for real operations',
    'projects.tms.desc':
      'Monorepo with 50+ modules in production: a visual route planner with an interactive map and dynamic stop reordering, satellite traceability for carriers, and an app for drivers and warehouse staff. All three layers met here: database, backend and UI.',
    'projects.tms.h1': '13 → 6 queries per transaction',
    'projects.tms.h2': '41 → 2 requests per screen (no N+1)',
    'projects.tms.h3': '86 environment merges, 705 own commits',

    'projects.rem.kind': 'Company · mission critical',
    'projects.rem.tagline': 'Medical records with digital signature and multi-level approvals',
    'projects.rem.desc':
      'Regulatory system built with .NET 8 + React + shadcn/ui for the pharmaceutical industry: full case-file traceability, three coordinated databases, native PDF rendering and an approval flow with no shortcuts.',
    'projects.rem.h1': 'Strict transactional auditing',
    'projects.rem.h2': 'Digital signature on approvals',

    'projects.dirs.tagline': 'Argentine address autocomplete, packaged for Dart',
    'projects.dirs.desc':
      'The geocoding piece of FletAR, extracted as a reusable library on top of Nominatim: LRU cache, one request per second queue, and a parser that already splits street, number, neighborhood and city. CI with tests on every push.',
    'projects.dirs.h1': '17 tests without touching the real service',
    'projects.dirs.h2': '“No results” ≠ “the service failed”',

    'projects.glass.kind': 'Experiment',
    'projects.glass.tagline': 'Real-time liquid glass refraction, no pre-rendering',
    'projects.glass.desc':
      'A counter and a drag & drop list where the glass refracts whatever is behind it. The effect is computed at runtime with feDisplacementMap and a signed distance field generated in the browser, instead of a background image.',
    'projects.glass.h1': 'SDF + displacement map generated on the fly',
    'projects.glass.h2': 'React 19 + Tailwind v4 + dnd-kit',

    'experience.eyebrow': 'Experience',
    'experience.title': 'Five years, four teams.',
    'experience.lead':
      'From network support to owning frontend and backend of systems people use every day.',

    'jobs.ceta.role': 'Full Stack Developer (Semi-Senior)',
    'jobs.ceta.when': 'Aug 2024 — Sep 2026',
    'jobs.ceta.b1': 'Logistics (TMS/WMS): visual route planner, dynamic stop reordering and atomic picking for several operators at once.',
    'jobs.ceta.b2': 'Security: the organization’s JWT scheme with rotating, revocable refresh tokens. Found and fixed a timing attack vulnerability: 46 ms down to 0.77 ms, backed by automated tests.',
    'jobs.ceta.b3': 'Performance: 13 → 6 queries per transaction and 41 → 2 requests per screen, removing N+1 latency.',
    'jobs.ceta.b4': 'Offline-first PWA: employee time tracking with biometrics, camera, geolocation and sync that survives connectivity loss.',
    'jobs.ceta.b5': 'DevOps: YAML pipelines in Azure DevOps for staging and production, 86 environment merges and 705 own commits.',

    'jobs.unahur.role': 'Full Stack Developer',
    'jobs.unahur.when': 'Mar 2023 — Oct 2023',
    'jobs.unahur.b1': 'Institutional web applications for public agencies and private-sector clients.',
    'jobs.unahur.b2': 'React and Tailwind CSS frontend modules; Node.js, Express, PHP and MySQL (Sequelize) backend services.',

    'jobs.telecentro.role': 'Technical Support N1/N2/N3 — Network Specialist',
    'jobs.telecentro.when': 'Oct 2023 — Aug 2024',
    'jobs.telecentro.b1': 'Diagnosed complex connectivity incidents: routing, switches, Wi-Fi mesh, IPv4/IPv6 and FTTH/coaxial.',
    'jobs.telecentro.b2': 'Advanced support for residential and corporate customers with strict SLA compliance.',

    'jobs.claro.role': 'Corporate Project Coordinator',
    'jobs.claro.when': 'Jun 2022 — Mar 2023',
    'jobs.claro.b1': 'Custom CRM platform in PHP, SQL and jQuery for tracking and assigning technical work orders.',
    'jobs.claro.b2': 'Python automation scripts that cut 40% of the time spent on administrative reports and reconciliations.',

    'stack.eyebrow': 'Stack',
    'stack.title': 'What I work with.',
    'stack.lead': 'Tools I used in production, not the ones I read about in a tutorial.',
    'stack.frontend': 'Frontend',
    'stack.backend': 'Backend',
    'stack.data': 'Data',
    'stack.cloud': 'Cloud & DevOps',
    'stack.mobile': 'Mobile',
    'stack.ai': 'Applied AI',

    'edu.degree': 'B.S. in Computer Science',
    'edu.badge': 'In progress',
    'edu.desc': 'Algorithms, data structures, concurrent systems design and relational databases.',
    'eng.title': 'Languages',
    'eng.es': 'Spanish — native',
    'eng.en': 'English — professional B1/B2: technical conversations, fluent reading of documentation, issues and PRs.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Looking for someone who closes the loop between frontend and backend?',
    'contact.desc': 'Available for full stack roles, mid-senior or senior, as an employee or per project. I reply the same day.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.apk': 'Try FletAR (APK)',
    'contact.cv': 'CV as PDF',

    'footer.made': 'Hand-written HTML, CSS and JavaScript. No frameworks.',
    'footer.top': 'Back to top ↑',
  },
};

const STORE = { lang: 'lb.lang', theme: 'lb.theme' };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- i18n ---------------- */

function readStore(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function writeStore(key, value) {
  try { localStorage.setItem(key, value); } catch { /* modo privado */ }
}

function initialLang() {
  const fromQuery = new URLSearchParams(location.search).get('lang');
  if (fromQuery === 'es' || fromQuery === 'en') return fromQuery;
  const saved = readStore(STORE.lang);
  if (saved === 'es' || saved === 'en') return saved;
  const painted = document.documentElement.lang;
  if (painted === 'es' || painted === 'en') return painted;
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}

let currentLang = initialLang();

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.es[key] ?? key;
}

function applyLang(lang, { animate = false } = {}) {
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  document.title = dict['meta.title'];
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value === undefined) return;
    if (animate && !reduceMotion) {
      el.style.transition = 'opacity 160ms ease, transform 160ms ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(-4px)';
      setTimeout(() => {
        el.textContent = value;
        el.style.opacity = '';
        el.style.transform = '';
      }, 140);
    } else {
      el.textContent = value;
    }
  });

  // CV según idioma
  const cvFile = lang === 'es'
    ? 'cv/CV_Luca_Baello_ES_Fullstack.pdf'
    : 'cv/CV_Luca_Baello_EN_Fullstack.pdf';
  document.querySelectorAll('#cv-link, [data-cv-link]').forEach((a) => a.setAttribute('href', cvFile));

  // Botones de idioma
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    btn.setAttribute('aria-label', btn.dataset.lang === 'es' ? 'Español' : 'English');
  });

  // Reformatear contadores según el idioma (se hayan animado o no)
  document.querySelectorAll('[data-count]').forEach((el) => {
    el.textContent = formatCount(el);
  });

  writeStore(STORE.lang, lang);
}

/* ---------------- Tema ---------------- */

function initialTheme() {
  const fromQuery = new URLSearchParams(location.search).get('theme');
  if (fromQuery === 'light' || fromQuery === 'dark') return fromQuery;
  const saved = readStore(STORE.theme);
  if (saved === 'light' || saved === 'dark') return saved;
  const painted = document.documentElement.dataset.theme;
  if (painted === 'light' || painted === 'dark') return painted;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const label = theme === 'light'
      ? (currentLang === 'es' ? 'Cambiar a tema oscuro' : 'Switch to dark theme')
      : (currentLang === 'es' ? 'Cambiar a tema claro' : 'Switch to light theme');
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f7fb' : '#07080b');
  writeStore(STORE.theme, theme);
}

/* ---------------- Contadores ---------------- */

function formatCount(el) {
  const raw = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals || 0);
  const locale = currentLang === 'es' ? 'es-AR' : 'en-US';
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(raw);
  return `${el.dataset.prefix || ''}${formatted}${el.dataset.suffix || ''}`;
}

function animateCount(el) {
  el.dataset.done = 'true';
  if (reduceMotion) {
    el.textContent = formatCount(el);
    return;
  }
  const target = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals || 0);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const locale = currentLang === 'es' ? 'es-AR' : 'en-US';
  const nf = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${prefix}${nf.format(target * eased)}${suffix}`;
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = `${prefix}${nf.format(target)}${suffix}`;
  }
  requestAnimationFrame(frame);
}

/* ---------------- Reveal on scroll ---------------- */

function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    document.querySelectorAll('[data-count]').forEach(animateCount);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      entry.target.querySelectorAll('[data-count]').forEach(animateCount);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  items.forEach((el) => observer.observe(el));
}

/* ---------------- Header, progreso y scrollspy ---------------- */

function initScroll() {
  const header = document.getElementById('header');
  const progress = document.getElementById('progress');
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  let ticking = false;

  function update() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('is-stuck', y > 12);
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;

    let active = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 140) active = section.id;
    }
    links.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${active}`);
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
}

/* ---------------- Spotlight + tilt ---------------- */

function initPointer() {
  if (reduceMotion) return;

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const spot = document.getElementById('spotlight');

  if (fine && spot) {
    let sx = window.innerWidth / 2;
    let sy = window.innerHeight / 2;
    let tx = sx;
    let ty = sy;
    let raf = null;

    window.addEventListener('pointermove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
      spot.classList.add('is-on');
      if (raf) return;
      raf = requestAnimationFrame(() => {
        sx += (tx - sx) * 0.12;
        sy += (ty - sy) * 0.12;
        spot.style.transform = `translate(${sx - 310}px, ${sy - 310}px)`;
        raf = null;
      });
    }, { passive: true });
  }

  if (!fine) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      const rx = ((y / rect.height) - 0.5) * -2.2;
      const ry = ((x / rect.width) - 0.5) * 2.2;
      card.style.transform = `translateY(-3px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

/* ---------------- Copiar email ---------------- */

async function initCopy() {
  const btn = document.getElementById('copy-email');
  const state = document.getElementById('copy-state');
  if (!btn || !state) return;
  const email = 'luca.baello@gmail.com';

  btn.addEventListener('click', async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      const area = document.createElement('textarea');
      area.value = email;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      document.body.removeChild(area);
    }

    state.textContent = ok ? t('contact.copied') : email;
    state.classList.add('is-visible');
    clearTimeout(initCopy._timer);
    initCopy._timer = setTimeout(() => state.classList.remove('is-visible'), 2200);
  });
}

/* ---------------- Menú mobile ---------------- */

function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const header = document.getElementById('header');
  if (!btn || !nav) return;

  const close = () => {
    nav.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    header.classList.remove('is-open');
    header.classList.toggle('is-stuck', window.scrollY > 12);
  };

  btn.addEventListener('click', () => {
    const open = nav.hidden;
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    header.classList.toggle('is-open', open);
    header.classList.toggle('is-stuck', open || window.scrollY > 12);
  });

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !nav.hidden) {
      close();
      btn.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && !nav.hidden) close();
  });
}

/* ---------------- Arranque ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(initialTheme());
  applyLang(currentLang);

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === currentLang) return;
      applyLang(btn.dataset.lang, { animate: true });
      applyTheme(document.documentElement.dataset.theme || 'dark');
    });
  });

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  initReveal();
  initScroll();
  initPointer();
  initCopy();
  initMobileMenu();
});
