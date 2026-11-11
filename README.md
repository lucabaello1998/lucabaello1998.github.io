# lucabaello1998.github.io

Portfolio personal de **Luca Nicolás Baello** — Full Stack Engineer.

🔗 <https://lucabaello1998.github.io/>

![Portfolio](docs/preview.png)

## Qué es

Un sitio estático de una sola página, sin frameworks ni build: HTML, CSS y
JavaScript a mano. Bilingüe (ES/EN), tema claro/oscuro y animaciones que se
apagan solas si el sistema pide menos movimiento.

- **ES / EN** con botón en el header, persistencia en `localStorage` y
  autodetección por idioma del navegador. También se puede forzar con
  `?lang=en` o `?lang=es` (útil para compartir un link en un idioma puntual).
- **Tema** claro/oscuro con `?theme=light` / `?theme=dark`, por preferencia del
  sistema en la primera visita y persistencia después.
- **CV** descargable: en español apunta al CV de 2 páginas, en inglés al de 1.
- **Accesibilidad**: skip link, foco visible, contraste AA, `aria-pressed` en
  los toggles, animaciones desactivadas con `prefers-reduced-motion`, y todo el
  contenido visible si JavaScript no carga.

## Estructura

```
.
├── index.html            # una sola página, contenido ES por defecto
├── assets/
│   ├── style.css         # tokens, layout, animaciones y responsive
│   ├── app.js            # diccionarios ES/EN, tema, contadores, reveal, tilt
│   ├── fonts/            # Inter + Space Grotesk (woff2, subset latin, self-hosted)
│   └── img/              # avatar, favicon y imagen para redes (OG)
├── cv/                   # CVs en PDF (ES y EN)
└── robots.txt
```

## Correr local

Cualquier servidor estático sirve. Por ejemplo:

```bash
python -m http.server 8941
```

Después abrir <http://127.0.0.1:8941/>.

> Abrir `index.html` con `file://` funciona, pero algunos navegadores bloquean
> las fuentes locales por CORS; con un servidor se ve igual que en producción.

## Verificar antes de publicar

```bash
node scripts/check.mjs
```

No hay build, así que lo que se rompe no rompe nada: aparece en pantalla. Este
script cubre las tres formas en que eso pasa:

| Qué revisa | Por qué |
|---|---|
| Cada `data-i18n` del HTML existe en **es** y en **en** | una clave que falta se muestra cruda: `hero.lead` en vez de la frase |
| Las dos listas de traducción tienen las mismas claves | si no, al cambiar de idioma se mezclan los dos |
| Cada `href`/`src` local apunta a un archivo real | el 404 solo se ve en producción |
| No hay `id` duplicados | rompen los anchors y los `querySelector` |
| Los dos CV son PDF de verdad (`%PDF-`) | un PDF corrupto se descarga y no abre |

Corre en el CI (`.github/workflows/ci.yml`) en cada push y PR. No levanta el
servidor ni abre un navegador: son archivos, no requests.

Para probar el comportamiento (idioma, tema, animaciones) hay que abrirlo con un
servidor: `?lang=en`, `?theme=light` y `?theme=dark` fuerzan el estado inicial
sin tocar `localStorage`.

## Publicación

GitHub Pages desde la rama `main`, raíz del repo (*Settings → Pages → Deploy
from a branch → `main` / `/ (root)`*). Cada push a `main` republica el sitio
solo: no hay build ni carpeta de salida, lo que hay en el repo es lo que se
sirve.

- El dominio es el del usuario (`lucabaello1998.github.io`), así que el repo
  tiene que llamarse exactamente así. Si algún día se usa un dominio propio, lo
  que cambia es `canonical`, `og:url`, `sitemap.xml` y `robots.txt`.
- `.nojekyll` está a propósito: sin ese archivo, Pages procesa el sitio con
  Jekyll y puede ignorar carpetas que empiezan con `_`.
- Después de un cambio de contenido conviene abrir el sitio publicado y probar
  los dos idiomas: el CI valida los archivos, no cómo se ve.
- Los CV de `cv/` se descargan directamente; si se reemplazan los PDF, mantener
  los mismos nombres (el JS arma el link por idioma).

## Editar contenido

Todos los textos viven en un solo lugar: el objeto `I18N` al principio de
`assets/app.js` (`es` y `en`). El HTML referencia cada texto con
`data-i18n="clave"`, así que agregar un idioma nuevo es copiar el bloque y
traducir.

## Créditos

- Tipografías: [Inter](https://rsms.me/inter/) y
  [Space Grotesk](https://github.com/floriankarsten/space-grotesk), SIL Open
  Font License.
- Foto de perfil: la de mi cuenta de GitHub.
