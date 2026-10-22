# lucabaello1998.github.io

Portfolio personal de **Luca Nicolás Baello** — Full Stack Engineer.

🔗 <https://lucabaello1998.github.io/>

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

## Publicación

GitHub Pages desde la rama `main`, raíz del repo. Cada push a `main` republica
el sitio solo.

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
