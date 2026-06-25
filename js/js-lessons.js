const jsLessons = [

  // ── CAPÍTULO 1: FUNDAMENTOS ──────────────────────────────────

  {
    id: 1,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Tu primer JavaScript",
    duration: "7 min",
    icon: "⚡",
    theory: `
      <h3>¿Qué es JavaScript?</h3>
      <p>HTML crea la estructura, CSS la diseña, y <strong>JavaScript le da vida</strong>. Con JS podés cambiar el contenido de la página, reaccionar a clics, mostrar mensajes y mucho más.</p>
      <p>JavaScript corre directamente en el navegador — no necesitás instalar nada.</p>

      <h3>Acceder a un elemento por su id</h3>
      <p>Usás <code>document.getElementById('id')</code> para "agarrar" un elemento HTML y guardarlo en una variable:</p>
      <pre><code>let titulo = document.getElementById('titulo');</code></pre>
      <p>O en una sola línea, sin guardar en variable:</p>
      <pre><code>document.getElementById('titulo').textContent = '¡Nuevo!';</code></pre>

      <h3>Cambiar el texto: .textContent</h3>
      <pre><code>document.getElementById('titulo').textContent = '¡JavaScript funciona!';</code></pre>

      <h3>Cambiar estilos: .style</h3>
      <pre><code>document.getElementById('titulo').style.color = 'hotpink';
document.getElementById('caja').style.backgroundColor = '#1a1a2e';</code></pre>
      <p>💡 En JavaScript las propiedades CSS usan <strong>camelCase</strong>: <code>background-color</code> → <code>backgroundColor</code>, <code>font-size</code> → <code>fontSize</code>.</p>
    `,
    instructions: "En el tab script.js escribí las 3 instrucciones:\n• Usá getElementById y .textContent para cambiar el texto del #titulo\n• Cambiá el .style.color del #mensaje al color que quieras\n• Cambiá el textContent del #estado",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera app JS ⚡</title>
  </head>
  <body>
    <h1 id="titulo">Hola, mundo</h1>
    <p id="mensaje">Este texto va a cambiar con JavaScript.</p>
    <p id="estado">Estado: apagado</p>
  </body>
</html>`,
    starterCss: `body { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; }
h1   { color: #9f67ff; }
#mensaje { color: #94a3b8; font-size: 1.1rem; }
#estado  { display: inline-block; padding: 4px 14px; border-radius: 20px; background: #1c1c35; color: #64748b; }`,
    starterJs: `// ⚡ Escribí tu JavaScript acá

// Podés acceder a un elemento por su id:
//   document.getElementById('id')

// Cambiar su texto:
//   elemento.textContent = 'nuevo texto'

// Cambiar su color:
//   elemento.style.color = 'hotpink'

`,
    checks: [
      { type: 'regex', pattern: 'getElementById',       message: 'Usá document.getElementById para acceder a un elemento', hint: "document.getElementById('titulo')" },
      { type: 'regex', pattern: '\\.textContent\\s*=',  message: 'Cambiá el textContent de algún elemento',                hint: "elemento.textContent = 'nuevo texto'" },
      { type: 'regex', pattern: '\\.style\\.',           message: 'Cambiá alguna propiedad de .style (color, backgroundColor...)', hint: "elemento.style.color = 'hotpink'" },
    ]
  },

  {
    id: 2,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Variables y datos",
    duration: "8 min",
    icon: "📦",
    theory: `
      <h3>¿Qué es una variable?</h3>
      <p>Una variable es como una caja con nombre donde guardás información para usarla más tarde:</p>
      <pre><code>let nombre  = 'Sofía';
let edad    = 17;
let activo  = true;</code></pre>

      <h3>let vs const</h3>
      <ul>
        <li><code>let</code> — variable que puede <strong>cambiar</strong> de valor</li>
        <li><code>const</code> — valor que <strong>no cambia</strong> (constante)</li>
      </ul>
      <pre><code>let puntos = 0;
puntos = 100;    // ✓ let puede cambiar

const PI = 3.14;
PI = 5;          // ✗ Error: const no se puede reasignar</code></pre>

      <h3>Tipos de datos</h3>
      <pre><code>let texto   = 'Hola mundo';    // string (cadena de texto)
let numero  = 42;              // number (número)
let activo  = true;            // boolean (verdadero/falso)
let frutas  = ['🍎','🍌','🍊']; // array (lista)</code></pre>

      <h3>Template literals — combinar texto y variables</h3>
      <p>Usás backticks <code>\`...\`</code> y <code>\${variable}</code> para mezclar texto con valores:</p>
      <pre><code>let nombre = 'Sofía';
let edad   = 17;
let frase  = \`Me llamo \${nombre} y tengo \${edad} años.\`;
// Resultado: "Me llamo Sofía y tengo 17 años."</code></pre>
      <p>También podés hacer cuentas dentro de <code>\${}</code>:</p>
      <pre><code>let precio = 100;
document.getElementById('total').textContent = \`Total: $\${precio * 1.21}\`;</code></pre>
    `,
    instructions: "En script.js escribí estas 4 instrucciones:\n• Declarar una variable con let para tu nombre\n• Declarar una const para tu materia favorita\n• Armar un mensaje combinando ambas con template literal\n• Mostrar el resultado en el #saludo con textContent",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi perfil 📦</title>
  </head>
  <body>
    <h1>Mi perfil 📦</h1>
    <p id="saludo">Acá va a aparecer tu mensaje...</p>
    <p id="extra"></p>
  </body>
</html>`,
    starterCss: `body     { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; }
#saludo  { font-size: 1.2rem; color: #a78bfa; background: #1e1e2e; padding: 16px 20px; border-radius: 10px; margin: 20px 0; }
#extra   { color: #94a3b8; }`,
    starterJs: `// 📦 Variables y datos

// 1. Declarar una variable con let para tu nombre:
let nombre = '';

// 2. Declarar una constante con const para tu materia favorita:
const materia = '';

// 3. Mostrar un mensaje con template literal en el #saludo:
// document.getElementById('saludo').textContent = \`...\${nombre}...\`

\`Hola, me llamo \${nombre} y mi materia favorita es \${materia}.\`;

let nota1 = 8;
let nota2 = 9;
document.getElementById('extra').textContent =
  \`Promedio de notas: \${(nota1 + nota2) / 2}\`;`,
    checks: [
      { type: 'regex', pattern: '\\blet\\s+\\w+\\s*=',    message: 'Declarar al menos una variable con let',          hint: "let nombre = 'Sofía';" },
      { type: 'regex', pattern: '\\bconst\\s+\\w+\\s*=',  message: 'Declarar al menos una constante con const',       hint: "const materia = 'Programación';" },
      { type: 'regex', pattern: '\\$\\{',                  message: 'Usar un template literal con ${variable}',        hint: '`Hola ${nombre}`' },
      { type: 'regex', pattern: '\\.textContent\\s*=',     message: 'Mostrar el resultado con .textContent',           hint: "document.getElementById('saludo').textContent = `...`" },
    ]
  },

  // ── CAPÍTULO 2: LÓGICA Y FUNCIONES ──────────────────────────

  {
    id: 3,
    chapter: 2,
    chapterTitle: "Capítulo 2: Lógica y funciones",
    title: "Condicionales: if y else",
    duration: "9 min",
    icon: "🔀",
    theory: `
      <h3>Tomar decisiones en código</h3>
      <p>Un condicional ejecuta código <strong>solo si</strong> una condición es verdadera. Si no, puede ejecutar otro código:</p>
      <pre><code>if (condicion) {
  // se ejecuta si condicion es true
} else {
  // se ejecuta si condicion es false
}</code></pre>

      <h3>Operadores de comparación</h3>
      <pre><code>===   igual estricto (compara valor Y tipo)
!==   distinto
>     mayor que
<     menor que
>=    mayor o igual
<=    menor o igual</code></pre>

      <h3>Ejemplo: nota y aprobación</h3>
      <pre><code>let nota = 8;

if (nota >= 6) {
  document.getElementById('resultado').textContent = 'Aprobado ✓';
  document.getElementById('resultado').style.color = 'limegreen';
} else {
  document.getElementById('resultado').textContent = 'Desaprobado ✗';
  document.getElementById('resultado').style.color = 'tomato';
}</code></pre>

      <h3>else if — más de dos opciones</h3>
      <pre><code>if (nota >= 9) {
  texto = 'Sobresaliente 🌟';
} else if (nota >= 6) {
  texto = 'Aprobado ✓';
} else {
  texto = 'Desaprobado ✗';
}</code></pre>

      <h3>💡 Consejo</h3>
      <p>Usá siempre <code>===</code> (triple igual) en vez de <code>==</code>. El triple igual compara también el tipo de dato, lo que evita errores raros.</p>
    `,
    instructions: "Escribí un if/else que evalúe la variable 'temperatura':\n• Si es mayor a 30 → mostrá 'Hace calor 🔥' en rojo en el #clima\n• Si es menor a 10 → mostrá 'Hace frío 🧊' en celeste en el #clima\n• Si no → mostrá 'Temperatura agradable 😊' en verde en el #clima\n\nTambién mostrá el número exacto en #detalle con template literal.",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Clima hoy 🌤️</title>
  </head>
  <body>
    <h1>🌤️ ¿Qué tiempo hace?</h1>
    <p id="clima">Calculando...</p>
    <p id="detalle"></p>
  </body>
</html>`,
    starterCss: `body    { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; }
#clima  { font-size: 1.4rem; font-weight: bold; margin: 20px 0; padding: 16px; border-radius: 8px; background: #1e1e2e; }
#detalle { color: #94a3b8; }`,
    starterJs: `// 🔀 Condicionales if / else

// Cambiá este número para probar los tres casos:
let temperatura = 35;

// Escribí el if / else if / else:
// Si temperatura > 30  → 'Hace calor 🔥'         (color: tomato)
// Si temperatura < 10  → 'Hace frío 🧊'           (color: #38bdf8)
// Si no                → 'Temperatura agradable 😊' (color: limegreen)

\`La temperatura actual es \${temperatura}°C\`;`,
    checks: [
      { type: 'regex', pattern: '\\bif\\s*\\(',        message: 'Usá un if para evaluar la temperatura',           hint: 'if (temperatura > 30) { ... }' },
      { type: 'regex', pattern: '\\belse\\b',           message: 'Usá else (o else if) para los otros casos',       hint: '} else { ... }' },
      { type: 'regex', pattern: '[><]=?\\s*\\d',        message: 'Usá un operador de comparación (>, <, >=, <=)',   hint: 'temperatura > 30' },
      { type: 'regex', pattern: '\\.textContent\\s*=',  message: 'Mostrá el resultado con .textContent',            hint: "getElementById('clima').textContent = '...'" },
    ]
  },

  {
    id: 4,
    chapter: 2,
    chapterTitle: "Capítulo 2: Lógica y funciones",
    title: "Funciones",
    duration: "10 min",
    icon: "🧩",
    theory: `
      <h3>¿Qué es una función?</h3>
      <p>Una función es un <strong>bloque de código con nombre</strong>. Lo definís una vez y lo llamás cuantas veces quieras, con distintos valores:</p>
      <pre><code>function saludar(nombre) {
  return 'Hola, ' + nombre + '!';
}

let a = saludar('Sofía');  // 'Hola, Sofía!'
let b = saludar('Lucas');  // 'Hola, Lucas!'</code></pre>

      <h3>Partes de una función</h3>
      <pre><code>function nombre(parametro1, parametro2) {
  // código que se ejecuta
  return resultado;
}</code></pre>
      <ul>
        <li><strong>function</strong>: palabra clave que define la función</li>
        <li><strong>nombre</strong>: cómo se llama (igual que una variable)</li>
        <li><strong>parámetros</strong>: datos de entrada (son opcionales)</li>
        <li><strong>return</strong>: valor que devuelve al código que la llamó</li>
      </ul>

      <h3>Función con múltiples parámetros</h3>
      <pre><code>function calcularPromedio(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

let prom = calcularPromedio(7, 9, 8);  // 8
document.getElementById('prom').textContent = prom;</code></pre>

      <h3>¿Por qué usar funciones?</h3>
      <p>Para <strong>no repetir código</strong>. Si tenés que calcular el promedio de 10 grupos distintos, escribís la función una vez y la llamás 10 veces.</p>
    `,
    instructions: "Escribí la función calcularPromedio(n1, n2, n3):\n• Tiene que retornar el promedio de los tres números\n• Llamarla con tres notas y mostrar el resultado en #resultado con template literal\n• Usar un if/else para mostrar en #estado si aprobó (promedio >= 6) o no",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Calculadora de notas 🧮</title>
  </head>
  <body>
    <h1>🧮 Calculadora de notas</h1>
    <p>Notas ingresadas en script.js</p>
    <p id="resultado">Promedio: ?</p>
    <p id="estado">Estado: ?</p>
  </body>
</html>`,
    starterCss: `body       { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; }
#resultado { font-size: 2rem; font-weight: bold; color: #a78bfa; margin: 16px 0; }
#estado    { font-size: 1.1rem; padding: 8px 16px; border-radius: 20px; display: inline-block; background: #1e1e2e; }`,
    starterJs: `// 🧩 Funciones

// 1. Definí la función calcularPromedio con tres parámetros:
function calcularPromedio(n1, n2, n3) {
  // retorná el promedio de las tres notas

}

// 2. Llamá la función con tres notas y guardá el resultado:
let promedio = calcularPromedio(8, 7, 9);

// 3. Mostrá el promedio en #resultado con template literal:

// 4. Usá if/else para mostrar 'Aprobado' o 'Desaprobado' en #estado:

\`Promedio: \${promedio}\`;

if (promedio >= 6) {
  document.getElementById('estado').textContent = '✓ Aprobado';
  document.getElementById('estado').style.color = 'limegreen';
} else {
  document.getElementById('estado').textContent = '✗ Desaprobado';
  document.getElementById('estado').style.color = 'tomato';
}`,
    checks: [
      { type: 'regex', pattern: '\\bfunction\\s+\\w+\\s*\\(',  message: 'Definir una función con la palabra clave function',    hint: 'function calcularPromedio(n1, n2, n3) { }' },
      { type: 'regex', pattern: '\\breturn\\b',                 message: 'La función debe retornar el resultado con return',     hint: 'return (n1 + n2 + n3) / 3;' },
      { type: 'regex', pattern: '\\w+\\s*\\(\\s*\\d',          message: 'Llamar la función pasándole números como argumento',   hint: 'calcularPromedio(8, 7, 9)' },
      { type: 'regex', pattern: '\\.textContent\\s*=',          message: 'Mostrar el resultado en el HTML con .textContent',    hint: "getElementById('resultado').textContent = `Promedio: ${promedio}`" },
    ]
  },

  // ── CAPÍTULO 3: EL DOM Y EVENTOS ─────────────────────────────

  {
    id: 5,
    chapter: 3,
    chapterTitle: "Capítulo 3: El DOM y eventos",
    title: "El DOM: manipular la página",
    duration: "10 min",
    icon: "🌐",
    theory: `
      <h3>¿Qué es el DOM?</h3>
      <p>DOM (Document Object Model) es la representación de todo el HTML como un árbol de objetos que JavaScript puede leer y modificar en tiempo real.</p>

      <h3>querySelector — seleccionar con cualquier selector CSS</h3>
      <p>Funciona igual que los selectores de CSS: por etiqueta, clase o id:</p>
      <pre><code>document.querySelector('#titulo')      // por id
document.querySelector('.tarjeta')    // por clase
document.querySelector('h1')          // por etiqueta
document.querySelector('ul li')       // combinado</code></pre>
      <p>Devuelve el <strong>primer</strong> elemento que coincide.</p>

      <h3>querySelectorAll — seleccionar varios</h3>
      <p>Devuelve <strong>todos</strong> los elementos que coinciden:</p>
      <pre><code>let items = document.querySelectorAll('li');
items.forEach(function(item) {
  item.style.color = 'hotpink';
});</code></pre>

      <h3>innerHTML — insertar HTML</h3>
      <p>A diferencia de <code>textContent</code>, <code>innerHTML</code> interpreta etiquetas HTML:</p>
      <pre><code>// textContent muestra literalmente "<b>hola</b>"
// innerHTML renderiza el texto en negrita
document.querySelector('#caja').innerHTML = '&lt;strong&gt;Negrita&lt;/strong&gt; y normal';</code></pre>
    `,
    instructions: "En script.js usá los tres selectores:\n• querySelector para cambiar el textContent del h2\n• querySelectorAll en los li y con forEach cambiá su color\n• innerHTML para poner contenido HTML (con alguna etiqueta) en el #info",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi lista 🌐</title>
  </head>
  <body>
    <h2>Mis series favoritas</h2>
    <ul>
      <li>Stranger Things</li>
      <li>Breaking Bad</li>
      <li>Arcane</li>
      <li>Dark</li>
    </ul>
    <div id="info">Información adicional aquí...</div>
  </body>
</html>`,
    starterCss: `body { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; }
h2   { color: #a78bfa; }
ul   { padding-left: 20px; }
li   { padding: 4px 0; font-size: 1rem; }
#info { background: #1e1e2e; padding: 14px; border-radius: 8px; margin-top: 20px; color: #94a3b8; }`,
    starterJs: `// 🌐 Manipulando el DOM

// 1. Usá querySelector para seleccionar el h2 y cambiar su textContent:

// 2. Usá querySelectorAll('li') y forEach para cambiar el color de cada item:

// 3. Usá innerHTML para poner contenido HTML en #info:
//    (por ejemplo: '<strong>Total:</strong> 4 series')

\`<strong>Total:</strong> \${items.length} series en la lista.\`;`,
    checks: [
      { type: 'regex', pattern: 'querySelector\\(',        message: 'Usá document.querySelector() para seleccionar un elemento', hint: "document.querySelector('h2')" },
      { type: 'regex', pattern: 'querySelectorAll\\(',     message: 'Usá querySelectorAll() para seleccionar todos los <li>',    hint: "document.querySelectorAll('li')" },
      { type: 'regex', pattern: '\\.forEach\\(',           message: 'Usá .forEach() para iterar sobre los elementos',            hint: 'items.forEach(function(item) { ... })' },
      { type: 'regex', pattern: '\\.innerHTML\\s*=',       message: 'Usá .innerHTML para insertar contenido HTML en #info',      hint: "documento.querySelector('#info').innerHTML = '<strong>Total:</strong> 4'" },
    ]
  },

  {
    id: 6,
    chapter: 3,
    chapterTitle: "Capítulo 3: El DOM y eventos",
    title: "Eventos: reaccionar a clics",
    duration: "10 min",
    icon: "🖱️",
    theory: `
      <h3>¿Qué es un evento?</h3>
      <p>Un <strong>evento</strong> es algo que sucede en la página: el usuario hizo clic, presionó una tecla, movió el mouse, etc. Con JavaScript podés "escuchar" estos eventos y ejecutar código cuando ocurren.</p>

      <h3>addEventListener</h3>
      <p>Se pone en un elemento y le dice "cuando ocurra este evento, ejecutá esta función":</p>
      <pre><code>let boton = document.getElementById('mi-btn');

boton.addEventListener('click', function() {
  // este código se ejecuta cuando hacen clic
  document.getElementById('resultado').textContent = '¡Clic!';
});</code></pre>

      <h3>Eventos comunes</h3>
      <pre><code>'click'      // clic del mouse
'mouseover'  // mouse encima del elemento
'keydown'    // se presionó una tecla
'input'      // se escribió en un campo de texto
'submit'     // se envió un formulario</code></pre>

      <h3>Variables fuera del evento</h3>
      <p>Para contar clics o guardar estado entre eventos, declarás variables <em>fuera</em> de la función:</p>
      <pre><code>let clics = 0;   // ← fuera del addEventListener

boton.addEventListener('click', function() {
  clics = clics + 1;  // incrementar
  document.getElementById('contador').textContent = \`Clics: \${clics}\`;
});</code></pre>
    `,
    instructions: "Agregá un addEventListener de 'click' al botón #btn-cambiar.\nCada vez que se haga clic tiene que:\n• Incrementar un contador y mostrarlo en #contador\n• Alternar el #mensaje entre '¡Par! 🟢' (verde) y '¡Impar! 🔴' (rojo)\n  usando if con el operador módulo %",
    starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>Interactividad 🖱️</title>
  </head>
  <body>
    <h1>🖱️ Hacé clic</h1>
    <button id="btn-cambiar">¡Clic acá!</button>
    <p id="mensaje">Esperando el primer clic...</p>
    <p id="contador">Clics: 0</p>
  </body>
</html>`,
    starterCss: `body          { font-family: Arial, sans-serif; background: #0f0f1a; color: white; padding: 30px; text-align: center; }
#btn-cambiar  { background: #7c3aed; color: white; border: none; padding: 12px 28px; border-radius: 8px; font-size: 1rem; cursor: pointer; margin: 20px 0; transition: background 0.2s; }
#btn-cambiar:hover { background: #9f67ff; }
#mensaje      { font-size: 1.4rem; padding: 20px; border-radius: 10px; background: #1e1e2e; min-height: 60px; }
#contador     { color: #64748b; margin-top: 10px; }`,
    starterJs: `// 🖱️ Eventos

// Variable para contar clics (declarada FUERA del evento):
let clics = 0;

// Seleccioná el botón:
let boton = document.getElementById('btn-cambiar');

// Agregá el addEventListener de 'click':
boton.addEventListener('click', function() {

  // Incrementá el contador:

  // Mostrá el contador en #contador con template literal:

  // Si clics es par → '#mensaje' dice '¡Par! 🟢' (color: limegreen)
  // Si clics es impar → '#mensaje' dice '¡Impar! 🔴' (color: tomato)
  // Tip: usá el operador módulo %  (clics % 2 === 0 → par)

});
\`Clics: \${clics}\`;

  if (clics % 2 === 0) {
    document.getElementById('mensaje').textContent = '¡Par! 🟢';
    document.getElementById('mensaje').style.color = 'limegreen';
  } else {
    document.getElementById('mensaje').textContent = '¡Impar! 🔴';
    document.getElementById('mensaje').style.color = 'tomato';
  }
});`,
    checks: [
      { type: 'regex', pattern: "addEventListener\\s*\\(\\s*['\"]click", message: "Usá addEventListener('click', ...) en el botón",      hint: "boton.addEventListener('click', function() { })" },
      { type: 'regex', pattern: '\\bfunction\\s*\\(',                     message: 'Pasá una función como segundo argumento al listener',  hint: "addEventListener('click', function() { ... })" },
      { type: 'regex', pattern: '\\.textContent\\s*=',                    message: 'Cambiá el textContent dentro del evento',             hint: "document.getElementById('mensaje').textContent = '...'" },
      { type: 'regex', pattern: '\\bif\\s*\\(',                           message: 'Usá un if para alternar entre los dos estados',       hint: 'if (clics % 2 === 0) { ... } else { ... }' },
    ],
    formUrl: 'https://docs.google.com/forms/d/1HkyMfFVObQxBp_ZnMCs7lOEqSe57bPbUCkoPzMEo8WU/viewform'
  },
];
