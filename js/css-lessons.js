const cssLessons = [

  // ── CAPÍTULO 1: EMPEZANDO CON CSS ────────────────────────────

  {
    id: 1,
    chapter: 1,
    chapterTitle: "Capítulo 1: Primeros pasos",
    title: "¿Qué es CSS?",
    duration: "6 min",
    icon: "🎨",
    theory: `
      <h3>HTML construye, CSS decora</h3>
      <p>HTML define <strong>qué</strong> hay en la página (títulos, párrafos, imágenes). CSS define <strong>cómo se ve</strong> — colores, tamaños, posiciones.</p>
      <p>Sin CSS, todas las páginas se ven igual: texto negro sobre fondo blanco.</p>

      <h3>La sintaxis de CSS</h3>
      <p>Cada regla CSS tiene tres partes:</p>
      <pre><code>selector {
  propiedad: valor;
}</code></pre>
      <ul>
        <li><strong>selector</strong> — a qué elemento se aplica el estilo</li>
        <li><strong>propiedad</strong> — qué se cambia (color, tamaño, fondo...)</li>
        <li><strong>valor</strong> — cómo se quiere que quede</li>
      </ul>

      <h3>Ejemplo completo</h3>
      <pre><code>h1 {
  color: hotpink;
}

p {
  color: gray;
  background-color: black;
}</code></pre>

      <h3>CSS en archivo separado</h3>
      <p>Lo correcto es escribir el CSS en un archivo <strong>aparte</strong> — por eso en este editor tenés dos tabs: <code>index.html</code> y <code>style.css</code>. Escribí el CSS en el tab <code>style.css</code> y el HTML se actualiza en tiempo real.</p>
    `,
    instructions: "En el tab style.css escribí:\n• Un color para el h1\n• Un color de fondo para el body\n• Un color diferente para los párrafos p\n\nPodés ver el resultado en la vista previa mientras escribís.",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página con CSS 🎨</title>
  </head>
  <body>
    <h1>¡Mi página tiene estilo!</h1>
    <p>Antes era texto negro sobre fondo blanco.</p>
    <p>Ahora puedo ponerle color a todo.</p>
    <p>CSS hace magia. ✨</p>
  </body>
</html>`,
    starterCss: `/* 🎨 Escribí tu CSS acá
   Sintaxis:
   selector {
     propiedad: valor;
   } */

`,
    checks: [
      { type: 'regex', pattern: 'h1\\s*\\{[^}]*color\\s*:',              message: 'Ponele un color al h1',               hint: 'h1 { color: hotpink; }' },
      { type: 'regex', pattern: 'body\\s*\\{[^}]*background-color\\s*:', message: 'Ponele un color de fondo al body',    hint: 'body { background-color: #1a1a2e; }' },
      { type: 'regex', pattern: 'p\\s*\\{[^}]*color\\s*:',               message: 'Ponele un color a los párrafos <p>', hint: 'p { color: gray; }' },
    ]
  },

  {
    id: 2,
    chapter: 1,
    chapterTitle: "Capítulo 1: Primeros pasos",
    title: "Selectores: elegir qué estilizar",
    duration: "8 min",
    icon: "🎯",
    theory: `
      <h3>¿Qué es un selector?</h3>
      <p>El selector indica qué elementos HTML van a recibir el estilo. Hay tres tipos principales:</p>

      <h3>1. Selector de elemento</h3>
      <p>Aplica el estilo a <strong>todas</strong> las etiquetas de ese tipo en la página:</p>
      <pre><code>h2 {
  color: coral;
}
/* Todos los h2 van a ser coral */</code></pre>

      <h3>2. Selector de clase (<code>.</code>)</h3>
      <p>Aplica el estilo a todos los elementos que tengan esa <code>class</code>. Se escribe con un punto adelante:</p>
      <pre><code>/* style.css */
.destacado {
  background-color: yellow;
  color: black;
}</code></pre>
      <pre><code>&lt;!-- index.html --&gt;
&lt;p class="destacado"&gt;Esto se resalta&lt;/p&gt;
&lt;p&gt;Esto no&lt;/p&gt;
&lt;p class="destacado"&gt;Esto también&lt;/p&gt;</code></pre>

      <h3>3. Selector de ID (<code>#</code>)</h3>
      <p>Aplica el estilo a <strong>un único elemento</strong> con ese <code>id</code>. Se escribe con numeral:</p>
      <pre><code>#titulo-principal {
  font-size: 48px;
  color: purple;
}</code></pre>

      <h3>¿Cuándo usar cada uno?</h3>
      <ul>
        <li><strong>Elemento</strong>: estilizar <em>todos</em> los de ese tipo</li>
        <li><strong>Clase</strong>: aplicar el mismo estilo a varios elementos específicos</li>
        <li><strong>ID</strong>: estilizar un único elemento especial</li>
      </ul>
    `,
    instructions: "En el tab style.css escribí los tres tipos de selectores:\n• Selector de elemento: un color para todos los h2\n• Selector de clase: .tarjeta con fondo de color\n• Selector de id: #especial con font-size mayor a 21px",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Selectores CSS 🎯</title>
  </head>
  <body>
    <h1>Mis fandoms favoritos</h1>

    <h2>Anime</h2>
    <p class="tarjeta">Attack on Titan</p>
    <p class="tarjeta">Demon Slayer</p>
    <p>Otros...</p>

    <h2>Series</h2>
    <p class="tarjeta">Stranger Things</p>
    <p id="especial">¡Esta es mi favorita de todas!</p>
  </body>
</html>`,
    starterCss: `/* 1. Selector de elemento: todos los h2 */

/* 2. Selector de clase: .tarjeta */

/* 3. Selector de ID: #especial */
`,
    checks: [
      { type: 'regex', pattern: 'h2\\s*\\{[^}]*color\\s*:',                                              message: 'Aplicá un color a los h2 con selector de elemento',   hint: 'h2 { color: coral; }' },
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*background-color\\s*:',                            message: 'Ponele background-color a .tarjeta',                  hint: '.tarjeta { background-color: #1e1e2e; }' },
      { type: 'regex', pattern: '#especial\\s*\\{[^}]*font-size\\s*:\\s*(2[2-9]|[3-9]\\d|\\d{3})px',    message: 'Ponele font-size mayor a 21px al #especial',           hint: '#especial { font-size: 24px; }' },
    ]
  },

  {
    id: 3,
    chapter: 1,
    chapterTitle: "Capítulo 1: Primeros pasos",
    title: "Colores en CSS",
    duration: "8 min",
    icon: "🌈",
    theory: `
      <h3>Tres formas de escribir colores</h3>

      <h4>1. Nombre del color</h4>
      <p>CSS tiene más de 140 colores con nombre:</p>
      <pre><code>color: red;
color: hotpink;
color: coral;
color: gold;
color: skyblue;</code></pre>

      <h4>2. Hexadecimal (el más usado)</h4>
      <p>Un código de 6 caracteres después del <code>#</code>. Primeros dos = rojo, del medio = verde, últimos = azul:</p>
      <pre><code>color: #ff6b6b;   /* rojo suave  */
color: #4ecdc4;   /* turquesa    */
color: #ffd93d;   /* amarillo    */
color: #6c63ff;   /* violeta     */</code></pre>
      <p>💡 Buscá "color picker" en Google para elegir y copiar el hex.</p>

      <h4>3. RGB</h4>
      <p>Tres números del 0 al 255 para rojo, verde y azul:</p>
      <pre><code>color: rgb(255, 107, 107);  /* rojo suave */
color: rgb(78, 205, 196);   /* turquesa   */</code></pre>

      <h3>Las dos propiedades de color</h3>
      <pre><code>p {
  color: white;               /* color del TEXTO */
  background-color: #6c63ff;  /* color del FONDO */
}</code></pre>
    `,
    instructions: "Usá los tres formatos de color en tu CSS:\n• Al menos uno por nombre (ej: hotpink, red, navy)\n• Al menos uno hexadecimal (#xxxxxx)\n• Al menos uno con rgb()\n\nUsá tanto color como background-color en algún elemento.",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi perfil musical 🎵</title>
  </head>
  <body>
    <h1>🎵 Mi perfil musical</h1>
    <h2>Lo que estoy escuchando</h2>
    <p class="cancion">Un Verano Sin Ti — Bad Bunny</p>
    <p class="cancion">Flowers — Miley Cyrus</p>
    <p class="cancion">Bzrp Music Sessions #53</p>
    <p id="favorita">⭐ Mi favorita del momento</p>
  </body>
</html>`,
    starterCss: `/* 🌈 Usá las 3 formas de escribir colores:
   - nombre: red, hotpink, gold, coral...
   - hex: #ff6b6b, #4ecdc4...
   - rgb: rgb(255, 107, 107)...

   Propiedades:
   - color → texto
   - background-color → fondo */

`,
    checks: [
      { type: 'regex', pattern: 'color\\s*:\\s*(red|blue|green|hotpink|coral|gold|lime|skyblue|white|black|gray|purple|orange|yellow|pink|cyan|teal|violet|indigo|crimson|navy|silver|turquoise|aqua|fuchsia)',
                                                                 message: 'Usá al menos un color por nombre (ej: hotpink, coral, gold)', hint: 'color: hotpink;' },
      { type: 'regex', pattern: 'color\\s*:\\s*#[0-9a-fA-F]{3,6}', message: 'Usá al menos un color hexadecimal (#xxxxxx)',             hint: 'color: #ff6b6b;' },
      { type: 'regex', pattern: 'color\\s*:\\s*rgb\\(',            message: 'Usá al menos un color con rgb(r, g, b)',                  hint: 'color: rgb(255, 107, 107);' },
      { type: 'regex', pattern: 'background-color\\s*:',           message: 'Usá background-color en algún elemento',                  hint: 'background-color: #1a1a2e;' },
    ]
  },

  // ── CAPÍTULO 2: TEXTO Y CAJA ─────────────────────────────────

  {
    id: 4,
    chapter: 2,
    chapterTitle: "Capítulo 2: Texto y caja",
    title: "Tipografía: dar forma al texto",
    duration: "9 min",
    icon: "🔡",
    theory: `
      <h3>Propiedades de texto más usadas</h3>

      <h4><code>font-size</code> — tamaño</h4>
      <pre><code>p  { font-size: 16px; }
h1 { font-size: 48px; }</code></pre>

      <h4><code>font-weight</code> — grosor (negrita)</h4>
      <pre><code>p { font-weight: normal; }  /* 400 */
p { font-weight: bold; }    /* 700 */</code></pre>

      <h4><code>font-style</code> — itálica</h4>
      <pre><code>p { font-style: italic; }</code></pre>

      <h4><code>text-align</code> — alineación</h4>
      <pre><code>h1 { text-align: center; }
p  { text-align: left; }</code></pre>

      <h4><code>text-decoration</code> — subrayado y tachado</h4>
      <pre><code>a   { text-decoration: none; }         /* quita subrayado */
del { text-decoration: line-through; }  /* tachado */</code></pre>

      <h4><code>font-family</code> — fuente tipográfica</h4>
      <pre><code>body { font-family: Arial, sans-serif; }
h1   { font-family: Georgia, serif; }</code></pre>
      <p>Siempre poné una fuente genérica al final (<code>sans-serif</code>, <code>serif</code>) por si la primera no está disponible.</p>
    `,
    instructions: "En style.css aplicá estos 5 estilos:\n• Centrá el h1 con text-align\n• Poné font-size mayor a 20px a los h2\n• Poné en itálica los elementos con class='opinion'\n• Quitá el subrayado a los links\n• Cambiá la font-family del body",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Review: Arcane ⭐</title>
  </head>
  <body>
    <h1>Review: Arcane (Netflix)</h1>

    <h2>Historia</h2>
    <p>Vi y Jinx son hermanas separadas por la guerra entre Piltover y Zaun.</p>
    <p class="opinion">La historia me partió el corazón. Puro 10/10.</p>

    <h2>Animación</h2>
    <p>Cada frame parece una pintura al óleo.</p>
    <p class="opinion">Es la animación más hermosa que vi en mi vida.</p>

    <p>Más info: <a href="#">Netflix</a></p>
  </body>
</html>`,
    starterCss: `/* 1. Centrar el h1 con text-align */

/* 2. h2 con font-size mayor a 20px */

/* 3. Párrafos .opinion en itálica */

/* 4. Quitar subrayado a los links <a> */

/* 5. Cambiar font-family del body */
`,
    checks: [
      { type: 'regex', pattern: 'h1\\s*\\{[^}]*text-align\\s*:\\s*center',              message: 'Centrar el h1 con text-align: center',                  hint: 'h1 { text-align: center; }' },
      { type: 'regex', pattern: 'h2\\s*\\{[^}]*font-size\\s*:\\s*(2[1-9]|[3-9]\\d|\\d{3})px',
                                                                                          message: 'El h2 necesita font-size mayor a 20px',                  hint: 'h2 { font-size: 24px; }' },
      { type: 'regex', pattern: '\\.opinion\\s*\\{[^}]*font-style\\s*:\\s*italic',       message: 'Poner en itálica los elementos con class="opinion"',      hint: '.opinion { font-style: italic; }' },
      { type: 'regex', pattern: 'a\\s*\\{[^}]*text-decoration\\s*:\\s*none',             message: 'Quitar el subrayado a los links con text-decoration: none', hint: 'a { text-decoration: none; }' },
      { type: 'regex', pattern: 'body\\s*\\{[^}]*font-family\\s*:',                      message: 'Cambiar la font-family del body',                         hint: 'body { font-family: Arial, sans-serif; }' },
    ]
  },

  {
    id: 5,
    chapter: 2,
    chapterTitle: "Capítulo 2: Texto y caja",
    title: "El modelo de caja",
    duration: "12 min",
    icon: "📦",
    theory: `
      <h3>Todo en CSS es una caja</h3>
      <p>Cada elemento HTML es un rectángulo con cuatro capas:</p>
      <pre><code>┌─────────────────────────────┐  ← margin (espacio exterior)
│  ┌───────────────────────┐  │
│  │  border (borde)       │  │
│  │  ┌─────────────────┐  │  │
│  │  │  padding        │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENIDO│  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘</code></pre>

      <h3>Padding — espacio ADENTRO</h3>
      <p>Entre el contenido y el borde. El <code>background-color</code> rellena el padding:</p>
      <pre><code>.tarjeta {
  padding: 16px;       /* todos los lados igual */
  padding: 8px 16px;   /* arriba/abajo  izq/der */
}</code></pre>

      <h3>Border — el borde</h3>
      <pre><code>.tarjeta {
  border: 2px solid #7c3aed;  /* grosor  estilo  color */
  border-radius: 8px;          /* esquinas redondeadas */
}</code></pre>

      <h3>Margin — espacio AFUERA</h3>
      <p>Espacio entre el elemento y sus vecinos. Es transparente:</p>
      <pre><code>.tarjeta {
  margin: 16px 0;  /* arriba/abajo, sin margen izq/der */
}</code></pre>
    `,
    instructions: "Estilizá la clase .tarjeta con el modelo de caja completo:\n• padding — espacio adentro de la tarjeta\n• border — borde visible con algún color\n• border-radius — esquinas redondeadas\n• margin — separación entre tarjetas\n• background-color — para ver el efecto del padding",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Tarjetas de personajes 🃏</title>
  </head>
  <body>
    <h1>🃏 Personajes favoritos</h1>

    <div class="tarjeta">
      <h2>Jinx</h2>
      <p>Serie: Arcane</p>
      <p>Poder: Caos explosivo</p>
    </div>

    <div class="tarjeta">
      <h2>Eleven</h2>
      <p>Serie: Stranger Things</p>
      <p>Poder: Telekinesis</p>
    </div>

    <div class="tarjeta">
      <h2>Zuko</h2>
      <p>Serie: Avatar</p>
      <p>Poder: Fuego</p>
    </div>
  </body>
</html>`,
    starterCss: `body {
  background-color: #0f0f1a;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* Estilizá .tarjeta con:
   - padding
   - border
   - border-radius
   - margin
   - background-color */

.tarjeta {

}`,
    checks: [
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*padding\\s*:',         message: 'Agregá padding a .tarjeta',                            hint: '.tarjeta { padding: 16px; }' },
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*border\\s*:',           message: 'Agregá un border a .tarjeta',                          hint: '.tarjeta { border: 2px solid purple; }' },
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*border-radius\\s*:',    message: 'Redondeá las esquinas con border-radius',              hint: '.tarjeta { border-radius: 8px; }' },
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*margin\\s*:',           message: 'Agregá margin para separar las tarjetas',              hint: '.tarjeta { margin: 16px 0; }' },
      { type: 'regex', pattern: '\\.tarjeta\\s*\\{[^}]*background-color\\s*:', message: 'Agregá background-color para ver el efecto del padding', hint: '.tarjeta { background-color: #1e1e2e; }' },
    ]
  },

  // ── CAPÍTULO 3: LAYOUT ───────────────────────────────────────

  {
    id: 6,
    chapter: 3,
    chapterTitle: "Capítulo 3: Layout con Flexbox",
    title: "Flexbox: alinear elementos",
    duration: "12 min",
    icon: "🧩",
    theory: `
      <h3>El problema que resuelve Flexbox</h3>
      <p>Sin CSS especial, los elementos se apilan uno debajo del otro. Flexbox los alinea en fila, centrados, con espacio entre ellos.</p>

      <h3>Activar Flexbox</h3>
      <p><code>display: flex</code> se pone en el <strong>contenedor padre</strong>. Los hijos se alinean automáticamente en fila:</p>
      <pre><code>.contenedor {
  display: flex;
}</code></pre>

      <h3><code>justify-content</code> — distribución horizontal</h3>
      <pre><code>.contenedor {
  justify-content: flex-start;    /* al inicio  */
  justify-content: center;         /* centrado   */
  justify-content: space-between;  /* máximo espacio entre elementos */
}</code></pre>

      <h3><code>align-items</code> — distribución vertical</h3>
      <pre><code>.contenedor {
  align-items: center;  /* centrado verticalmente */
}</code></pre>

      <h3><code>gap</code> — espacio entre elementos</h3>
      <pre><code>.contenedor {
  gap: 16px;
}</code></pre>

      <h3><code>flex-wrap</code> — salto de línea</h3>
      <pre><code>.contenedor {
  flex-wrap: wrap;  /* si no entran, pasan a la siguiente línea */
}</code></pre>
    `,
    instructions: "Usá Flexbox en dos lugares:\n\n1. El nav:\n   display:flex y justify-content para distribuir los links\n\n2. El .tarjetas:\n   display:flex, gap entre tarjetas, y flex-wrap:wrap",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Flexbox 🧩</title>
  </head>
  <body>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Perfil</a>
      <a href="#">Torneos</a>
      <a href="#">Ranking</a>
    </nav>

    <h1>🃏 Clases de personaje</h1>

    <div class="tarjetas">
      <div class="tarjeta">⚔️ Guerrero</div>
      <div class="tarjeta">🧙 Mago</div>
      <div class="tarjeta">🏹 Arquero</div>
      <div class="tarjeta">🗡️ Ladrón</div>
      <div class="tarjeta">🛡️ Paladín</div>
    </div>
  </body>
</html>`,
    starterCss: `body {
  font-family: Arial, sans-serif;
  background-color: #0f0f1a;
  color: white;
  padding: 20px;
}

/* 1. Estilizá el nav con display:flex y justify-content */
nav {

}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #7c3aed;
  border-radius: 6px;
}

h1 { margin: 24px 0 16px; }

/* 2. Estilizá .tarjetas con display:flex, gap y flex-wrap:wrap */
.tarjetas {

}

.tarjeta {
  background-color: #1e1e2e;
  padding: 16px;
  border-radius: 8px;
  width: 140px;
  text-align: center;
}`,
    checks: [
      { type: 'regex', pattern: 'nav\\s*\\{[^}]*display\\s*:\\s*flex',         message: 'Activá flexbox en el nav con display: flex',              hint: 'nav { display: flex; }' },
      { type: 'regex', pattern: 'nav\\s*\\{[^}]*justify-content\\s*:',         message: 'Usá justify-content en el nav',                           hint: 'nav { justify-content: space-between; }' },
      { type: 'regex', pattern: '\\.tarjetas\\s*\\{[^}]*display\\s*:\\s*flex', message: 'Activá flexbox en .tarjetas con display: flex',            hint: '.tarjetas { display: flex; }' },
      { type: 'regex', pattern: '\\.tarjetas\\s*\\{[^}]*gap\\s*:',             message: 'Agregá gap en .tarjetas',                                 hint: '.tarjetas { gap: 16px; }' },
      { type: 'regex', pattern: '\\.tarjetas\\s*\\{[^}]*flex-wrap\\s*:\\s*wrap', message: 'Agregá flex-wrap: wrap a .tarjetas',                    hint: '.tarjetas { flex-wrap: wrap; }' },
    ],
    formUrl: 'https://docs.google.com/forms/d/1hhpwJ52LcVHfd4Rg6JJ6VlNa1gb5re7z6o3ClmHUh_s/viewform'
  },
];
