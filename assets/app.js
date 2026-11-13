/* ==========================================================================
   Luca Baello — Portfolio
   i18n, tema, animaciones y micro-interacciones. Sin dependencias.
   ========================================================================== */

const I18N = {
  es: {
    'meta.title': 'Luca Baello — Full Stack Engineer',
    'meta.description':
      'Full Stack Engineer con 5 años de experiencia: React / Next.js, .NET 8 y PHP / Laravel, arquitecturas limpias, PostGIS, tiempo real y productos móviles. Buenos Aires, Argentina.',
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
      'Desarrollador Full Stack con cinco años construyendo sistemas en producción de punta a punta: interfaces en React y Next.js, APIs en C# / .NET 8 y en PHP / Laravel, y bases de datos PostgreSQL, SQL Server y MySQL ajustadas para carga real.',
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
      'Trabajo con React 19 / Next.js y C# / .NET 8, con Clean Architecture, CQRS y tests como red de seguridad. Cuando el sistema viene de antes, también hago la modernización completa: de PHP 7.4 sin framework a Laravel 12, conservando el esquema real de la base. Me interesa la parte que casi no se ve: autenticación que no se rompe, migraciones que no duelen y un pipeline que despliega sin que nadie mire el reloj.',
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
      'Diez productos propios, un experimento de UI y dos sistemas de empresa donde el código no es público. Cada tarjeta dice qué problema resuelve y qué decisión técnica tuvo más peso.',
    'projects.site': 'Ver sitio',
    'projects.code': 'Código',
    'projects.download': 'Descargar',
    'projects.deck': 'Presentación',
    'projects.report': 'Informe de ejemplo',
    'projects.askMe': 'Pedime el detalle',
    'projects.quality.ci': 'CI en verde en 15 repos',
    'projects.quality.tests': 'Más de 1.000 tests automáticos',
    'projects.quality.docs': 'Uso y despliegue documentados',

    'projects.lavar.kind': 'Producto nuevo',
    'projects.lavar.tagline': 'La lavandería deja el cuaderno: el cliente sigue su pedido con un código, sin instalar nada',
    'projects.lavar.desc':
      'API en .NET 8 y panel en React para una lavandería de barrio. El mostrador carga el pedido con kilos, acolchados o zapatillas, el precio queda congelado al recibirlo y el cliente consulta el estado en un link con un código de 6 letras (K7M2QP): sin cuenta, sin app, sin llamar por teléfono. Los avisos salen por WhatsApp con el mensaje ya escrito y todo corre en una sola imagen Docker con SQLite.',
    'projects.lavar.h1': 'El precio se congela al crear el pedido: subir la lista no reescribe la historia',
    'projects.lavar.h2': 'Reglas de estado en el dominio: no se entrega algo que no está listo',
    'projects.lavar.h3': '68 tests, rate limit en la consulta pública y vista del cliente con línea de tiempo',

    'projects.fieldops.kind': 'Caso de estudio',
    'projects.fieldops.tagline': 'Un sistema de gestión de campo en producción, reescrito de PHP 7.4 a Laravel 12',
    'projects.fieldops.desc':
      '378 archivos PHP sin framework, 76 tablas sin claves foráneas y 11,3 millones de filas en la tabla de tareas. Migré el esquema real sin recortes y reescribí la operación —tablero, Kanban, stock, altas, técnicos— sobre Laravel 12, con demo reproducible en Docker y datos sintéticos que respetan los mismos volúmenes.',
    'projects.fieldops.h1': '76 tablas / 1.517 columnas migradas sin recortes',
    'projects.fieldops.h2': 'Kanban con drag & drop validado en el servidor',
    'projects.fieldops.h3': '62 tests de feature sobre MySQL real',

    'projects.legacylens.kind': 'Herramienta propia',
    'projects.legacylens.tagline': 'Un CLI que radiografía un sistema legacy PHP/MySQL y dice cuánto duele migrarlo',
    'projects.legacylens.desc':
      'Nació del análisis que hice a mano para FieldOps: leer 378 archivos y 76 tablas sin claves foráneas. Lo convertí en una herramienta que parsea el dump, reconstruye las relaciones que nadie documentó, detecta SQL concatenado, funciones extintas y secretos hardcodeados, y devuelve un índice de dolor de migración con plan de acción.',
    'projects.legacylens.h1': '24 reglas de código y 11 de esquema',
    'projects.legacylens.h2': 'Relaciones inferidas por convención de nombre',
    'projects.legacylens.h3': 'Informe HTML autocontenido + JSON + Markdown',
    'projects.sueldosar.kind': 'Herramienta propia',
    'projects.sueldosar.tagline': 'Motor de liquidación argentino + observatorio de sueldos tech que se actualiza solo',
    'projects.sueldosar.desc':
      'Dos cosas en un repo. Un motor de liquidación en .NET 8 donde la ley es un archivo JSON: SAC, vacaciones, aportes, ganancias e indemnizaciones, con la base legal de cada concepto y 61 tests. Y un observatorio que releva ofertas tech argentinas todas las semanas y publica lo que encuentra, aunque duela: la mayoría no declara sueldo, y las que lo declaran suelen publicar montos de relleno.',
    'projects.sueldosar.h1': '77 tests xUnit + 101 pytest, CI con 3 jobs',
    'projects.sueldosar.h2': 'La ley como dato: sumar un período es copiar un JSON',
    'projects.sueldosar.h3': 'Filtros de relleno, ruido no-tech y atípicos, contados y publicados',
    'projects.observatory': 'Observatorio',

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

    'projects.jobradar.kind': 'Herramienta propia',
    'projects.jobradar.tagline': 'Radar diario de ofertas remotas rankeadas contra mi perfil, con tablero en Pages',
    'projects.jobradar.desc':
      'Scraper que releva ofertas remotas todos los días, las rankea contra mi perfil y experiencia, y publica un tablero limpio en Cloudflare Pages. Incluye una CLI para consultar el estado sin abrir el navegador.',
    'projects.jobradar.h1': 'Tablero publicado en Pages, actualizado por GitHub Actions',
    'projects.jobradar.h2': 'Rank de encaje CV↔aviso con pesos configurables',
    'projects.jobradar.h3': 'CLI de estado con resumen y alertas',

    'projects.mlbbdraft.kind': 'Producto nuevo',
    'projects.mlbbdraft.tagline': 'Tier list medida + drafter 5v5 con bans y consejos para 134 héroes',
    'projects.mlbbdraft.desc':
      'Aplicación web para Mobile Legends: Bang Bang que combina una tier list basada en datos, un drafter 5v5 con fase de bans y picks, y consejos por matchup para 134 héroes.',
    'projects.mlbbdraft.h1': '134 héroes con roles, posiciones y counters',
    'projects.mlbbdraft.h2': 'Drafter 5v5 con bans, picks y sugerencias',
    'projects.mlbbdraft.h3': 'Consejos de matchup por rol y composición',

    'projects.cvfit.kind': 'Herramienta propia',
    'projects.cvfit.tagline': 'Encaje CV↔aviso, gaps detectados y CV adaptado en tres estilos',
    'projects.cvfit.desc':
      'Compará tu CV contra un aviso, descubrí qué palabras faltan, qué experiencias pesan más y generá una versión adaptada en tres formatos: ATS, clásico y compacto.',
    'projects.cvfit.h1': 'Score de encaje con palabras clave del aviso',
    'projects.cvfit.h2': 'Gaps técnicos detectados y sugeridos',
    'projects.cvfit.h3': 'CV adaptado en 3 estilos listos para descargar',

    'projects.fichada.kind': 'Producto nuevo',
    'projects.fichada.tagline': 'Fichaje con perímetro por geolocalización, horas trabajadas y cálculo de extras',
    'projects.fichada.desc':
      'PWA para fichar entrada y salida validando que el dispositivo esté dentro de un perímetro geográfico. Calcula horas, extras y ausencias, con sincronización offline-first.',
    'projects.fichada.h1': 'Perímetro configurable por geolocalización',
    'projects.fichada.h2': 'Cálculo de horas y extras automático',
    'projects.fichada.h3': 'Funciona offline y sincroniza al recuperar red',

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

    'projects.dirs.kind': 'Librería open source',
    'projects.dirs.tagline': 'Autocompletado de direcciones argentinas, como paquete de Dart',
    'projects.dirs.desc':
      'La pieza de geocoding de FletAR, extraída como librería reutilizable sobre Nominatim: caché LRU, cola de una request por segundo y un parser que devuelve calle, altura, barrio y localidad ya separados. CI con tests en cada push.',
    'projects.dirs.h1': '18 tests sin tocar el servicio real',
    'projects.dirs.h2': '“Sin resultados” ≠ “falló el servicio”',

    'projects.glass.kind': 'Experimento',
    'projects.glass.tagline': 'Refracción de vidrio líquido en tiempo real, sin pre-render',
    'projects.glass.desc':
      'Contador y lista con drag & drop donde el vidrio refracta lo que hay detrás. El efecto se calcula en runtime con feDisplacementMap y un mapa de distancias firmado generado en el navegador, en vez de usar una imagen de fondo.',
    'projects.glass.h1': 'SDF + displacement map generados al vuelo',
    'projects.glass.h2': 'React 19 + Tailwind v4 + dnd-kit',

    'projects.memoria.kind': 'Open source',
    'projects.memoria.tagline': 'Memoria portable para agentes, con citas archivo:línea',
    'projects.memoria.desc':
      'Servidor MCP que indexa notas, memorias y READMEs en SQLite FTS5 y los expone a Claude Code, Codex o Cursor. Búsqueda léxica e híbrida con embeddings, citas que se pueden abrir y evals con tabla de aciertos y costo. Guarda notas nuevas sin duplicarlas. Sin dependencias ni API key.',
    'projects.memoria.h1': '132 tests: cada cita se abre y se verifica',
    'projects.memoria.h2': 'Evals: 83% con memoria, 0% sin memoria',

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
      'Full Stack Engineer with 5 years of experience: React / Next.js, .NET 8 and PHP / Laravel, clean architecture, PostGIS, real-time systems and mobile products. Buenos Aires, Argentina.',
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
      'Full Stack developer with five years building end-to-end production systems: React and Next.js interfaces, C# / .NET 8 and PHP / Laravel APIs, and PostgreSQL, SQL Server and MySQL databases tuned for real workloads.',
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
      'I work with React 19 / Next.js and C# / .NET 8, using Clean Architecture, CQRS and tests as a safety net. When the system predates all of this, I also handle the full modernization: from framework-less PHP 7.4 to Laravel 12, keeping the real database schema. I care about the part you barely see: authentication that does not break, migrations that do not hurt, and a pipeline that deploys without anyone watching the clock.',
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
      'Ten products of my own, a UI experiment and two company systems whose code is private. Each card states the problem it solves and the technical decision that mattered most.',
    'projects.site': 'Visit site',
    'projects.code': 'Code',
    'projects.download': 'Download',
    'projects.deck': 'Deck',
    'projects.report': 'Sample report',
    'projects.askMe': 'Ask me for details',
    'projects.quality.ci': 'Green CI across 15 repos',
    'projects.quality.tests': '1,000+ automated tests',
    'projects.quality.docs': 'Usage and deploy documented',

    'projects.lavar.kind': 'New product',
    'projects.lavar.tagline': 'The laundromat drops the notebook: customers track their order with a code, no app required',
    'projects.lavar.desc':
      'A .NET 8 API and a React panel for a neighborhood laundromat. The counter logs the order with kilos, duvets or shoes, the price is frozen at drop-off, and the customer checks the status on a link with a 6-letter code (K7M2QP): no account, no app, no phone call. Notices go out on WhatsApp with the message pre-written, and the whole thing runs in a single Docker image with SQLite.',
    'projects.lavar.h1': 'Price frozen when the order is created: raising the list never rewrites history',
    'projects.lavar.h2': 'State rules live in the domain: you cannot hand over what is not ready',
    'projects.lavar.h3': '68 tests, rate-limited public lookup and a customer timeline view',

    'projects.fieldops.kind': 'Case study',
    'projects.fieldops.tagline': 'A production field-operations system, rewritten from PHP 7.4 to Laravel 12',
    'projects.fieldops.desc':
      '378 framework-less PHP files, 76 tables without foreign keys and 11.3 million rows in the tasks table. I migrated the real schema as-is and rewrote the operation —dashboard, Kanban, stock, installations, technicians— on Laravel 12, with a reproducible Docker demo and synthetic data that matches the original volumes.',
    'projects.fieldops.h1': '76 tables / 1,517 columns migrated as-is',
    'projects.fieldops.h2': 'Server-validated drag & drop Kanban',
    'projects.fieldops.h3': '62 feature tests against real MySQL',

    'projects.legacylens.kind': 'Tool of my own',
    'projects.legacylens.tagline': 'A CLI that X-rays a legacy PHP/MySQL system and tells you how much it hurts to migrate',
    'projects.legacylens.desc':
      'It came out of the analysis I did by hand for FieldOps: reading 378 files and 76 tables without foreign keys. I turned it into a tool that parses the dump, rebuilds the relationships nobody ever documented, flags concatenated SQL, dead functions and hardcoded secrets, and returns a migration pain index with an action plan.',
    'projects.legacylens.h1': '24 code rules and 11 schema rules',
    'projects.legacylens.h2': 'Relationships inferred from column naming',
    'projects.legacylens.h3': 'Self-contained HTML report + JSON + Markdown',

    'projects.sueldosar.kind': 'Tool of my own',
    'projects.sueldosar.tagline': 'Argentine payroll engine + a tech salary observatory that updates itself',
    'projects.sueldosar.desc':
      'Two things in one repo. A payroll engine in .NET 8 where the law is a JSON file: severance, vacations, contributions, income tax and SAC, with the legal basis for every line item and 61 tests. Plus an observatory that scrapes Argentine tech job postings every week and publishes what it finds, even when it stings: most postings do not state a salary, and the ones that do usually publish filler amounts.',
    'projects.sueldosar.h1': '77 xUnit tests + 101 pytest tests, 3-job CI',
    'projects.sueldosar.h2': 'The law as data: adding a period is copying a JSON file',
    'projects.sueldosar.h3': 'Filler, non-tech noise and outlier filters, counted and published',
    'projects.observatory': 'Observatory',

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

    'projects.jobradar.kind': 'Tool of my own',
    'projects.jobradar.tagline': 'Daily radar of remote job offers ranked against my profile, with a Pages dashboard',
    'projects.jobradar.desc':
      'A scraper that collects remote job offers every day, ranks them against my profile and experience, and publishes a clean dashboard on Cloudflare Pages. Includes a CLI to check status without opening a browser.',
    'projects.jobradar.h1': 'Dashboard published on Pages, updated by GitHub Actions',
    'projects.jobradar.h2': 'CV↔job fit rank with configurable weights',
    'projects.jobradar.h3': 'Status CLI with summary and alerts',

    'projects.mlbbdraft.kind': 'New product',
    'projects.mlbbdraft.tagline': 'Data-driven tier list + 5v5 drafter with bans and tips for 134 heroes',
    'projects.mlbbdraft.desc':
      'Web app for Mobile Legends: Bang Bang that combines a data-driven tier list, a 5v5 drafter with ban and pick phases, and matchup tips for 134 heroes.',
    'projects.mlbbdraft.h1': '134 heroes with roles, positions and counters',
    'projects.mlbbdraft.h2': '5v5 drafter with bans, picks and suggestions',
    'projects.mlbbdraft.h3': 'Matchup tips by role and team composition',

    'projects.cvfit.kind': 'Tool of my own',
    'projects.cvfit.tagline': 'CV↔job fit, detected gaps and a tailored CV in three styles',
    'projects.cvfit.desc':
      'Compare your CV against a job posting, discover missing keywords, see which experiences matter most, and generate a tailored version in three formats: ATS, classic and compact.',
    'projects.cvfit.h1': 'Fit score with keywords from the job posting',
    'projects.cvfit.h2': 'Detected and suggested technical gaps',
    'projects.cvfit.h3': 'Tailored CV in 3 ready-to-download styles',

    'projects.fichada.kind': 'New product',
    'projects.fichada.tagline': 'Time tracking with geofenced perimeter, worked hours and overtime calculation',
    'projects.fichada.desc':
      'PWA to clock in and out while validating that the device is inside a geographic perimeter. Calculates hours, overtime and absences with offline-first sync.',
    'projects.fichada.h1': 'Configurable perimeter via geolocation',
    'projects.fichada.h2': 'Automatic hours and overtime calculation',
    'projects.fichada.h3': 'Works offline and syncs when back online',

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

    'projects.dirs.kind': 'Open-source library',
    'projects.dirs.tagline': 'Argentine address autocomplete, packaged for Dart',
    'projects.dirs.desc':
      'The geocoding piece of FletAR, extracted as a reusable library on top of Nominatim: LRU cache, one request per second queue, and a parser that already splits street, number, neighborhood and city. CI with tests on every push.',
    'projects.dirs.h1': '18 tests without touching the real service',
    'projects.dirs.h2': '“No results” ≠ “the service failed”',

    'projects.glass.kind': 'Experiment',
    'projects.glass.tagline': 'Real-time liquid glass refraction, no pre-rendering',
    'projects.glass.desc':
      'A counter and a drag & drop list where the glass refracts whatever is behind it. The effect is computed at runtime with feDisplacementMap and a signed distance field generated in the browser, instead of a background image.',
    'projects.glass.h1': 'SDF + displacement map generated on the fly',
    'projects.glass.h2': 'React 19 + Tailwind v4 + dnd-kit',

    'projects.memoria.kind': 'Open source',
    'projects.memoria.tagline': 'Portable memory for agents, with file:line citations',
    'projects.memoria.desc':
      'MCP server that indexes notes, memory files and READMEs into SQLite FTS5 and exposes them to Claude Code, Codex or Cursor. Lexical and hybrid search with embeddings, citations you can actually open, and evals with an accuracy and cost table. Saves new notes without duplicating them. No dependencies, no API key.',
    'projects.memoria.h1': '132 tests: every citation is opened and checked',
    'projects.memoria.h2': 'Evals: 83% with memory, 0% without it',

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
