const lessons = [
  {
    id: 1,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "La estructura básica",
    duration: "5 min",
    icon: "🏗️",
    theory: `
      <h3>¿Qué es HTML?</h3>
      <p>HTML es el lenguaje con el que están hechas <strong>todas</strong> las páginas web que visitás. Sí, todas: YouTube, Instagram, Spotify... todo HTML.</p>
      <p>Un documento HTML tiene esta estructura base:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mi página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- acá va todo lo visible --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> — le avisa al navegador que es HTML5</li>
        <li><code>&lt;html&gt;</code> — el contenedor de todo</li>
        <li><code>&lt;head&gt;</code> — info de la página (no se ve en pantalla)</li>
        <li><code>&lt;title&gt;</code> — el texto de la pestaña del navegador</li>
        <li><code>&lt;body&gt;</code> — todo lo que el usuario va a ver</li>
      </ul>
    `,
    instructions: "Vas a crear la base de tu propia fan page. Armá la estructura completa: DOCTYPE, html, head con un title que diga el nombre de tu artista o serie favorita, y body.",
    starterCode: `<!-- 🎤 ¡Hora de crear tu fan page!
     Empezá con la estructura básica de HTML -->`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Fan Page de Bad Bunny</title>
  </head>
  <body>

  </body>
</html>`,
    checks: [
      { type: 'regex',           pattern: '<!DOCTYPE\\s+html>',  message: 'Agregá <!DOCTYPE html> al inicio',          hint: 'Primera línea: <!DOCTYPE html>' },
      { type: 'element',         selector: 'html',               message: 'Necesitás el elemento <html>',              hint: 'Envolvé todo con <html>...</html>' },
      { type: 'element',         selector: 'head',               message: 'Necesitás el elemento <head>',              hint: 'Dentro de <html>, agregá <head>...</head>' },
      { type: 'elementWithText', selector: 'title',              message: '<title> debe tener el nombre de tu fan page', hint: 'Ej: <title>Fan Page de Bad Bunny</title>' },
      { type: 'element',         selector: 'body',               message: 'Necesitás el elemento <body>',              hint: 'Después de </head>, agregá <body>...</body>' },
    ]
  },

  {
    id: 2,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Títulos que impactan",
    duration: "7 min",
    icon: "🎮",
    theory: `
      <h3>Las etiquetas de título</h3>
      <p>HTML tiene 6 niveles de título. El <code>&lt;h1&gt;</code> es el más grande e importante (el nombre de la página), el <code>&lt;h6&gt;</code> el más chico:</p>
      <pre><code>&lt;h1&gt;El más grande&lt;/h1&gt;
&lt;h2&gt;Sección principal&lt;/h2&gt;
&lt;h3&gt;Subsección&lt;/h3&gt;</code></pre>
      <h3>Regla de oro</h3>
      <ul>
        <li>Usá <strong>un solo <code>&lt;h1&gt;</code></strong> por página</li>
        <li>No te saltés niveles (de h1 a h3 sin h2 queda raro)</li>
        <li>Los títulos le dan <em>jerarquía</em> a tu contenido</li>
      </ul>
    `,
    instructions: "Armá el perfil de un gamer o streamer famoso (o inventado por vos). Necesitás: un h1 con el nombre del gamer, un h2 que diga 'Juegos favoritos', y un h3 con el nombre del primer juego.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Perfil Gamer</title>
  </head>
  <body>
    <!-- 🎮 Armá el perfil de tu gamer favorito
         Acordate: h1 para el nombre, h2 para las secciones, h3 para los detalles -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Perfil Gamer</title>
  </head>
  <body>
    <h1>xXNightWolfXx</h1>
    <h2>Juegos favoritos</h2>
    <h3>Minecraft</h3>
    <h3>Fortnite</h3>
    <h2>Datos del streamer</h2>
    <h3>Plataforma: Twitch</h3>
  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1', message: 'Agregá un <h1> con el nombre del gamer',         hint: '<h1>Nombre del gamer</h1>' },
      { type: 'elementWithText', selector: 'h2', message: 'Agregá al menos un <h2> para una sección',       hint: '<h2>Juegos favoritos</h2>' },
      { type: 'elementWithText', selector: 'h3', message: 'Agregá al menos un <h3> con un detalle',         hint: '<h3>Minecraft</h3>' },
    ]
  },

  {
    id: 3,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Tu bio de redes",
    duration: "6 min",
    icon: "📱",
    theory: `
      <h3>Párrafos con <code>&lt;p&gt;</code></h3>
      <p>El texto en bloque va dentro de etiquetas <code>&lt;p&gt;</code>. Cada <code>&lt;p&gt;</code> empieza en una nueva línea con espacio:</p>
      <pre><code>&lt;p&gt;Primera parte de mi bio.&lt;/p&gt;
&lt;p&gt;Segunda parte, en otro párrafo.&lt;/p&gt;</code></pre>
      <h3>Salto de línea</h3>
      <p>Para saltar de línea <em>dentro</em> de un mismo párrafo usás <code>&lt;br&gt;</code>:</p>
      <pre><code>&lt;p&gt;Línea uno&lt;br&gt;
Línea dos (sin espacio extra)&lt;/p&gt;</code></pre>
      <h3>Ojo con esto</h3>
      <p>Los espacios y enters que ponés en el código <strong>no se ven</strong> en el navegador. Solo los <code>&lt;p&gt;</code> y <code>&lt;br&gt;</code> generan separación visual.</p>
    `,
    instructions: "Escribí tu bio como si fuera para Instagram o TikTok. Necesitás: un h1 con tu nombre o apodo, y al menos 3 párrafos: uno presentándote, uno con tus intereses, y uno con un dato random tuyo.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi bio</title>
  </head>
  <body>
    <!-- 📱 Escribí tu bio de redes
         ¿Cómo te presentarías en Instagram o TikTok? -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi bio</title>
  </head>
  <body>
    <h1>@sofi.codes 🌙</h1>
    <p>Hola! Soy Sofi, tengo 16 años y soy de Buenos Aires.</p>
    <p>Me obsesiona el anime, el K-pop y aprender a programar (sí, las tres cosas juntas).</p>
    <p>Dato random: puedo comer pizza a cualquier hora del día 🍕</p>
  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1',  message: 'Agregá un <h1> con tu nombre o apodo',    hint: '<h1>@tu_nombre</h1>' },
      { type: 'minCount',        selector: 'p',   count: 3, message: 'Escribí al menos 3 párrafos <p>', hint: 'Cada bloque de texto va en su propio <p>...</p>' },
    ]
  },

  {
    id: 4,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Tus top 5",
    duration: "8 min",
    icon: "🏆",
    theory: `
      <h3>Lista sin orden <code>&lt;ul&gt;</code></h3>
      <p>Para cuando el orden no importa (una lista de favoritos, ingredientes, etc.):</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Bad Bunny&lt;/li&gt;
  &lt;li&gt;Taylor Swift&lt;/li&gt;
  &lt;li&gt;Bizarrap&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <h3>Lista ordenada <code>&lt;ol&gt;</code></h3>
      <p>Para cuando el orden sí importa (un ranking, pasos de una receta, etc.):</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;La mejor canción del año&lt;/li&gt;
  &lt;li&gt;La segunda mejor&lt;/li&gt;
  &lt;li&gt;La tercera&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p>Cada elemento de la lista va dentro de <code>&lt;li&gt;</code>.</p>
    `,
    instructions: "Creá dos listas: tu TOP 5 canciones o series del momento (ul, porque son tus favoritas y no están rankeadas), y un ranking TOP 3 de tus películas o videojuegos favoritos de todos los tiempos (ol, con orden de mejor a mejor).",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis tops 🏆</title>
  </head>
  <body>
    <h1>Mis tops del momento</h1>

    <h2>Lo que estoy escuchando / viendo</h2>
    <!-- ✅ Lista sin orden con 5 elementos -->

    <h2>Mi ranking de todos los tiempos</h2>
    <!-- 🥇 Lista ordenada con 3 elementos -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis tops 🏆</title>
  </head>
  <body>
    <h1>Mis tops del momento</h1>

    <h2>Lo que estoy escuchando</h2>
    <ul>
      <li>Un Verano Sin Ti - Bad Bunny</li>
      <li>Midnights - Taylor Swift</li>
      <li>MAÑANA SERÁ BONITO - Karol G</li>
      <li>Bzrp Music Sessions - Bizarrap</li>
      <li>El Último Tour del Mundo</li>
    </ul>

    <h2>Mi ranking de películas de todos los tiempos</h2>
    <ol>
      <li>Interstellar</li>
      <li>Spider-Man: No Way Home</li>
      <li>El Rey León</li>
    </ol>
  </body>
</html>`,
    checks: [
      { type: 'element',    selector: 'ul',    message: 'Agregá una lista sin orden <ul>',               hint: '<ul><li>...</li></ul>' },
      { type: 'minCount',   selector: 'ul li', count: 5, message: 'La lista <ul> necesita al menos 5 elementos', hint: 'Ponele 5 cosas a tu lista <ul>' },
      { type: 'element',    selector: 'ol',    message: 'Agregá un ranking <ol>',                        hint: '<ol><li>...</li></ol>' },
      { type: 'minCount',   selector: 'ol li', count: 3, message: 'El ranking <ol> necesita al menos 3 posiciones', hint: 'Ponele 3 cosas a tu ranking <ol>' },
    ]
  },

  {
    id: 5,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Tus links favoritos",
    duration: "8 min",
    icon: "🔗",
    theory: `
      <h3>La etiqueta <code>&lt;a&gt;</code></h3>
      <p>Los links se hacen con <code>&lt;a&gt;</code> (de "anchor"). El atributo <code>href</code> es la dirección a donde va:</p>
      <pre><code>&lt;a href="https://www.youtube.com"&gt;YouTube&lt;/a&gt;</code></pre>
      <h3>Abrir en nueva pestaña</h3>
      <p>Agregá <code>target="_blank"</code> para que no cierre tu página:</p>
      <pre><code>&lt;a href="https://open.spotify.com" target="_blank"&gt;
  Escuchar en Spotify
&lt;/a&gt;</code></pre>
      <h3>El texto importa</h3>
      <p>Evitá poner "clickeá acá" — mejor describí a dónde lleva el link. Es mejor para accesibilidad y para Google.</p>
    `,
    instructions: "Armá tu sección personal de links (tipo Linktree). Creá al menos 3 links a sitios que usás seguido: YouTube, Spotify, Instagram, Twitch, lo que quieras. Cada link debe abrirse en una nueva pestaña.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis links 🔗</title>
  </head>
  <body>
    <h1>@tu_nombre — mis links</h1>
    <p>Todo lo que necesitás en un solo lugar:</p>

    <!-- 🔗 Agregá al menos 3 links con target="_blank"
         Podés usar YouTube, Spotify, Instagram, TikTok, Twitch... -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis links 🔗</title>
  </head>
  <body>
    <h1>@sofi.codes — mis links</h1>
    <p>Todo lo que necesitás en un solo lugar:</p>

    <ul>
      <li><a href="https://www.youtube.com" target="_blank">Mi canal de YouTube 🎥</a></li>
      <li><a href="https://open.spotify.com" target="_blank">Mi playlist en Spotify 🎵</a></li>
      <li><a href="https://www.instagram.com" target="_blank">Instagram 📸</a></li>
      <li><a href="https://www.twitch.tv" target="_blank">En vivo en Twitch 🎮</a></li>
    </ul>
  </body>
</html>`,
    checks: [
      { type: 'minCount',      selector: 'a',        count: 3, message: 'Agregá al menos 3 links <a>',              hint: '<a href="https://...">texto del link</a>' },
      { type: 'elementWithAttr', selector: 'a',      attr: 'href', message: 'Los links necesitan el atributo href',  hint: 'href="https://www.youtube.com"' },
      { type: 'elementWithAttr', selector: 'a[target="_blank"]', attr: 'target', message: 'Al menos un link debe abrir en nueva pestaña (target="_blank")', hint: 'Agregá target="_blank" a tus links' },
    ]
  },

  {
    id: 6,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Galería de tu universo",
    duration: "7 min",
    icon: "🖼️",
    theory: `
      <h3>La etiqueta <code>&lt;img&gt;</code></h3>
      <p>Las imágenes son etiquetas <strong>vacías</strong> — no tienen etiqueta de cierre. Sus dos atributos más importantes:</p>
      <pre><code>&lt;img src="URL-de-la-imagen" alt="descripción"&gt;</code></pre>
      <ul>
        <li><code>src</code> — la URL de la imagen</li>
        <li><code>alt</code> — texto si la imagen no carga (y para lectores de pantalla)</li>
      </ul>
      <h3>Imágenes de internet</h3>
      <p>Podés usar cualquier URL de imagen. Para pruebas, <code>https://picsum.photos/300/200</code> devuelve una foto random de 300×200px.</p>
      <pre><code>&lt;img src="https://picsum.photos/300/200"
     alt="Foto random"
     width="300"&gt;</code></pre>
    `,
    instructions: "Creá una mini galería de tu serie, banda, videojuego o artista favorito. Agregá al menos 2 imágenes usando URLs de internet. Cada imagen DEBE tener un alt descriptivo (no pongas alt vacío — es trampa 😄).",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi galería favorita 🖼️</title>
  </head>
  <body>
    <h1>Galería: [tu tema favorito]</h1>
    <p>Una colección de imágenes de lo que más me gusta.</p>

    <!-- 🖼️ Agregá al menos 2 imágenes con src y alt
         Podés buscar imágenes en Google y copiar la URL,
         o usar https://picsum.photos/300/200 para fotos de ejemplo -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi galería favorita 🖼️</title>
  </head>
  <body>
    <h1>Galería: Stranger Things</h1>
    <p>Una colección de imágenes de lo que más me gusta.</p>

    <img src="https://picsum.photos/300/200?random=10" alt="Escena del grupo en el bosque" width="300">
    <img src="https://picsum.photos/300/200?random=20" alt="El laboratorio de Hawkins" width="300">
    <img src="https://picsum.photos/300/200?random=30" alt="Eleven usando sus poderes" width="300">
  </body>
</html>`,
    checks: [
      { type: 'minCount',      selector: 'img',      count: 2, message: 'Agregá al menos 2 imágenes <img>',        hint: '<img src="https://..." alt="descripción">' },
      { type: 'elementWithAttr', selector: 'img',    attr: 'src',  message: 'Las imágenes necesitan el atributo src',   hint: 'src="URL de la imagen"' },
      { type: 'elementWithAttr', selector: 'img',    attr: 'alt',  message: 'Las imágenes necesitan el atributo alt',   hint: 'alt="descripción de la imagen"' },
    ]
  },

  {
    id: 7,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Review sin spoilers",
    duration: "6 min",
    icon: "⭐",
    theory: `
      <h3>Dar énfasis al texto</h3>
      <pre><code>&lt;strong&gt;Texto importante (negrita)&lt;/strong&gt;
&lt;em&gt;Texto con énfasis (itálica)&lt;/em&gt;
&lt;mark&gt;Texto resaltado en amarillo&lt;/mark&gt;
&lt;del&gt;Texto tachado&lt;/del&gt;</code></pre>
      <h3><code>&lt;strong&gt;</code> vs <code>&lt;b&gt;</code></h3>
      <p><code>&lt;strong&gt;</code> indica que algo es <strong>importante</strong> (semántica). <code>&lt;b&gt;</code> solo es visual. Preferí siempre <code>&lt;strong&gt;</code>.</p>
      <h3>Tip</h3>
      <p>Usá <code>&lt;mark&gt;</code> para spoilers o datos que no querés que se pierdan. ¡Queda re bien en las reviews!</p>
    `,
    instructions: "Escribí una mini review de tu película, serie o videojuego favorito. Debe tener: un título con h1, al menos 2 párrafos, una palabra en <strong> (el nombre del título o algo importante), algo en <em> (tu opinión personal), y algo en <mark> (¡sin spoilers... o con, vos decidís!).",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi review ⭐</title>
  </head>
  <body>
    <h1>Review: [tu película/serie/juego]</h1>

    <!-- ⭐ Escribí tu review con formato
         Usá strong, em y mark para darle vida al texto
         Ejemplo: "La actuación de <strong>Florence Pugh</strong> es <em>increíble</em>" -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi review ⭐</title>
  </head>
  <body>
    <h1>Review: Arcane (Netflix)</h1>

    <p>
      <strong>Arcane</strong> es probablemente la mejor serie animada que vi en mi vida.
      La animación es <em>una obra de arte</em> — cada frame parece una pintura.
    </p>

    <p>
      La historia de Vi y Jinx te parte el corazón en serio.
      <mark>Spoiler: el final de la temporada 1 me dejó llorando 10 minutos.</mark>
    </p>

    <p>Calificación: <strong>10/10</strong> — <em>obligatoria</em>.</p>
  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1',             message: 'Poné un título <h1> con el nombre de tu review',    hint: '<h1>Review: nombre de tu peli/serie</h1>' },
      { type: 'minCount',        selector: 'p',    count: 2, message: 'Escribí al menos 2 párrafos',                        hint: 'Dos bloques de texto entre <p>...</p>' },
      { type: 'element',         selector: 'strong, b',      message: 'Usá <strong> para destacar algo importante',         hint: '<strong>el título o algo clave</strong>' },
      { type: 'element',         selector: 'em, i',          message: 'Usá <em> para tu opinión personal',                  hint: '<em>es increíble</em>' },
    ]
  },

  {
    id: 8,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Stats de personajes",
    duration: "10 min",
    icon: "📊",
    theory: `
      <h3>Anatomía de una tabla</h3>
      <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Personaje&lt;/th&gt;
      &lt;th&gt;Poder&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Spider-Man&lt;/td&gt;
      &lt;td&gt;Sentido arácnido&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      <ul>
        <li><code>&lt;table&gt;</code> — la tabla completa</li>
        <li><code>&lt;thead&gt;</code> — fila de encabezados</li>
        <li><code>&lt;tbody&gt;</code> — filas de datos</li>
        <li><code>&lt;tr&gt;</code> — una fila</li>
        <li><code>&lt;th&gt;</code> — celda de encabezado (negrita por defecto)</li>
        <li><code>&lt;td&gt;</code> — celda de datos</li>
      </ul>
    `,
    instructions: "Creá la tabla de stats de 3 personajes de tu juego, película o serie favorita. Las columnas deben ser: Personaje, Poder especial, Punto débil y Nivel de amenaza (del 1 al 10).",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Stats de personajes 📊</title>
  </head>
  <body>
    <h1>Tabla de stats: [tu universo favorito]</h1>

    <!-- 📊 Creá la tabla con thead y tbody
         4 columnas: Personaje | Poder especial | Punto débil | Nivel de amenaza -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Stats de personajes 📊</title>
  </head>
  <body>
    <h1>Tabla de stats: Marvel</h1>

    <table border="1">
      <thead>
        <tr>
          <th>Personaje</th>
          <th>Poder especial</th>
          <th>Punto débil</th>
          <th>Nivel de amenaza</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Spider-Man</td>
          <td>Sentido arácnido + telarañas</td>
          <td>Proteger a sus seres queridos</td>
          <td>8/10</td>
        </tr>
        <tr>
          <td>Iron Man</td>
          <td>Armadura de alta tecnología</td>
          <td>Sin la armadura es humano</td>
          <td>9/10</td>
        </tr>
        <tr>
          <td>Scarlet Witch</td>
          <td>Magia del caos</td>
          <td>Emociones fuertes</td>
          <td>10/10</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`,
    checks: [
      { type: 'element',    selector: 'table',             message: 'Creá la tabla con <table>',                     hint: '<table>...</table>' },
      { type: 'minCount',   selector: 'th',     count: 4,  message: 'La tabla necesita 4 encabezados <th>',          hint: 'Personaje | Poder | Punto débil | Nivel' },
      { type: 'minCount',   selector: 'tr',     count: 4,  message: 'Necesitás al menos 4 filas <tr> (encabezado + 3 personajes)', hint: 'Una fila de encabezados y una por cada personaje' },
      { type: 'minCount',   selector: 'td',     count: 9,  message: 'Completá los datos de los 3 personajes',        hint: 'Cada personaje necesita 4 celdas <td>' },
    ]
  },

  {
    id: 9,
    chapter: 4,
    chapterTitle: "Capítulo 4: Formularios",
    title: "Formulario de fan club",
    duration: "12 min",
    icon: "📬",
    theory: `
      <h3>Un formulario básico</h3>
      <pre><code>&lt;form&gt;
  &lt;label for="nombre"&gt;Tu nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;
  &lt;textarea id="mensaje" name="mensaje"&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
      <h3>Tipos de input</h3>
      <ul>
        <li><code>type="text"</code> — texto libre</li>
        <li><code>type="email"</code> — valida que sea un email válido</li>
        <li><code>type="password"</code> — oculta lo que se escribe</li>
        <li><code>type="number"</code> — solo números</li>
      </ul>
    `,
    instructions: "Creá el formulario de inscripción al fan club de tu artista favorito. Debe pedir: nombre artístico (text), email (email), un área de texto preguntando '¿Por qué sos el/la fan número 1?' (textarea), y un botón que diga 'Unirme al club 🎤'.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Fan Club 🎤</title>
  </head>
  <body>
    <h1>Fan Club Oficial de [tu artista]</h1>
    <p>¿Querés unirte? Completá el formulario:</p>

    <!-- 📬 Creá el formulario de inscripción
         Campos: nombre artístico (text), email, por qué sos fan (textarea), botón -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Fan Club 🎤</title>
  </head>
  <body>
    <h1>Fan Club Oficial de Karol G 🌸</h1>
    <p>¿Querés unirte a las Bichota? Completá el formulario:</p>

    <form>
      <label for="apodo">Tu nombre artístico:</label><br>
      <input type="text" id="apodo" name="apodo" placeholder="Ej: Bichota_superfan"><br><br>

      <label for="email">Tu email:</label><br>
      <input type="email" id="email" name="email" placeholder="tu@email.com"><br><br>

      <label for="razon">¿Por qué sos el/la fan número 1?</label><br>
      <textarea id="razon" name="razon" rows="4" cols="40"
        placeholder="Contanos todo..."></textarea><br><br>

      <button type="submit">Unirme al club 🎤</button>
    </form>
  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'form',                                    message: 'Creá el formulario con <form>',                    hint: '<form>...</form>' },
      { type: 'element', selector: 'input[type="text"], input:not([type])',   message: 'Agregá un campo de texto para el nombre artístico', hint: '<input type="text" name="apodo">' },
      { type: 'element', selector: 'input[type="email"]',                    message: 'Agregá un campo de email',                         hint: '<input type="email" name="email">' },
      { type: 'element', selector: 'textarea',                               message: 'Agregá un <textarea> para la pregunta del fan',    hint: '<textarea name="razon"></textarea>' },
      { type: 'element', selector: 'button, input[type="submit"]',           message: 'Agregá un botón para enviar el formulario',        hint: '<button type="submit">Unirme al club 🎤</button>' },
    ]
  },
];
