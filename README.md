# 🌐 Aprende a Programar — Cursos Interactivos

Plataforma de aprendizaje interactiva para enseñar HTML, CSS y JavaScript desde cero, similar a Codedex. Diseñada para uso en clase con estudiantes principiantes.

🔗 **Demo en vivo:** [programacion2do.github.io/cursoHTML](https://programacion2do.github.io/cursoHTML)

---

## ✨ Características

- **3 cursos completos:** HTML, CSS y JavaScript
- **Editor de código en vivo** con 3 pestañas (HTML / CSS / JS) y vista previa instantánea
- **Verificación automática** de ejercicios con checks personalizados por lección
- **Quiz por lección** — el botón "Siguiente" se desbloquea solo al completar el ejercicio Y el quiz
- **Diploma descargable** al finalizar cada curso (PNG via html2canvas)
- **Formulario de opinión** con puntaje de estrellas, guardado en localStorage
- **Playground libre** — editor sin restricciones para experimentar, con guardado de proyectos y enlaces para compartir
- **Panel docente** con exportación a PDF del material completo (teoría + misión + solución + vista previa)
- **Sistema de entrega** — los alumnos pueden enviar su código al docente por email o descargarlo como JSON
- Progreso guardado en `localStorage` (sin cuenta, sin servidor)

---

## 🗂️ Estructura del proyecto

```
html-course/
├── index.html          # Página de inicio — selección de cursos
├── lesson.html         # Página de lección — editor + quiz + diploma
├── playground.html     # Editor libre (HTML/CSS/JS)
├── css/
│   └── style.css       # Estilos globales
└── js/
    ├── app.js          # Lógica principal (editor, verificación, quiz, diploma...)
    ├── lessons.js      # Contenido del curso de HTML
    ├── css-lessons.js  # Contenido del curso de CSS
    └── js-lessons.js   # Contenido del curso de JavaScript
```

---

## 🚀 Cómo usar

No requiere instalación ni servidor. Es HTML/CSS/JS puro, funciona directamente en el navegador.

### Opción 1 — Abrir directo
Abrí `index.html` en cualquier navegador moderno.

### Opción 2 — Servidor local (recomendado para evitar restricciones CORS)
```powershell
# Desde la carpeta del proyecto
.\server.ps1
```
O con Python:
```bash
python -m http.server 8000
```

---

## 👩‍🏫 Panel docente

Permite exportar el material completo de cada curso a PDF (teoría, misión, solución y vista previa de cada lección) y ver las opiniones de los alumnos.

**Cómo acceder:**
- Teclado: `Ctrl + Shift + Y` desde la página de inicio
- URL: agregar `#docente` al final de la URL (`index.html#docente`)
- Contraseña por defecto: `DOCENTE2026` *(cambiable en `index.html`)*

---

## 📤 Sistema de entregas

Cuando un alumno completa un curso y descarga su diploma, puede entregar su trabajo al docente:

- **Descargar JSON** — genera un archivo con el código de cada ejercicio completado
- **Enviar por email** — integración con [EmailJS](https://emailjs.com) (gratis hasta 200 emails/mes)

Para activar el envío por email, editá `js/app.js` y completá:
```js
const _EMAILJS_SERVICE  = 'service_xxx';   // de emailjs.com
const _EMAILJS_TEMPLATE = 'template_xxx';
const _EMAILJS_PUBLIC   = 'tu_public_key';
```
El template de EmailJS debe incluir las variables: `{{nombre}}`, `{{apellido}}`, `{{email}}`, `{{curso}}`, `{{progreso}}`, `{{fecha}}`, `{{contenido}}`.

---

## 🎮 Playground

Editor libre en `playground.html`, accesible desde el botón del header. Permite:

- Escribir HTML, CSS y JS con vista previa en vivo
- Guardar proyectos en el navegador (hasta 20)
- Compartir proyectos mediante un enlace (el código se codifica en la URL)
- Restaura automáticamente la última sesión al volver

---

## 🛠️ Tecnologías

| Herramienta | Uso |
|---|---|
| [CodeMirror 5](https://codemirror.net/5/) | Editor de código con syntax highlighting |
| [html2canvas](https://html2canvas.hertzen.com/) | Exportar el diploma como imagen PNG |
| [EmailJS](https://emailjs.com/) | Envío de entregas por email (opcional) |
| localStorage | Guardar progreso, opiniones y proyectos |
| GitHub Pages | Hosting estático gratuito |

---

## 📝 Agregar o editar lecciones

Cada archivo de lecciones (`lessons.js`, `css-lessons.js`, `js-lessons.js`) exporta un array. Cada lección tiene esta estructura:

```js
{
  id:           1,
  chapter:      1,
  chapterTitle: 'Nombre del capítulo',
  icon:         '🏷️',
  title:        'Título de la lección',
  duration:     '10 min',
  theory:       `<h3>Subtítulo</h3><p>Contenido HTML...</p>`,
  instructions: 'Descripción de la tarea para el alumno.',
  starterCode:  `<!-- código inicial -->`,
  solution:     `<!-- código correcto -->`,
  checks: [
    { type: 'element', selector: 'h1', message: 'Debe existir un <h1>', hint: 'Agregá una etiqueta h1' },
    { type: 'regex',   pattern:  'hola', message: 'El texto debe incluir "hola"' },
  ],
  quiz: [
    {
      question:    '¿Para qué sirve la etiqueta <h1>?',
      options:     ['Título principal', 'Imagen', 'Párrafo', 'Lista'],
      correct:     0,
      explanation: 'h1 es el título de mayor jerarquía en HTML.',
    },
  ],
}
```

**Tipos de check disponibles:**

| Tipo | Descripción |
|---|---|
| `element` | Verifica que exista un selector CSS en el DOM |
| `elementWithText` | Verifica que el elemento exista y tenga texto |
| `elementWithAttr` | Verifica que el elemento tenga un atributo determinado |
| `regex` | Verifica que el código coincida con una expresión regular |
| `minCount` | Verifica que haya al menos N elementos de un selector |
| `custom` | Función personalizada `(code, doc) => boolean` |

---

## 👩‍💻 Desarrollado por

**Elizabeth Izquierdo** con asistencia de [Claude](https://claude.ai) · © 2026
