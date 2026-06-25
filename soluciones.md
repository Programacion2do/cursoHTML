# Soluciones — Aprende a Programar

> Este archivo es solo para uso docente.

---

## HTML (13 lecciones)

### Leccion 1

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fan Page de Bad Bunny</title>
  </head>
  <body>

  </body>
</html>
```

### Leccion 2

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 3

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 4

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 5

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 6

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 7

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 8

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 9

```html
<!DOCTYPE html>
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
</html>
```

### Leccion 10

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Perfil Gamer 🎮</title>
  </head>
  <body>
    <h1>🎮 Perfil del jugador</h1>

    <div>
      <h2>Datos del jugador</h2>
      <p>Nombre: xXNightWolfXx</p>
      <p>Nivel: 87</p>
      <p>País: Argentina 🇦🇷</p>
    </div>

    <div>
      <h2>Juegos favoritos</h2>
      <ul>
        <li>Minecraft</li>
        <li>Fortnite</li>
        <li>Valorant</li>
      </ul>
    </div>

    <div>
      <h2>Logros</h2>
      <p>🏆 500 victorias en modo batalla</p>
      <p>⭐ Clasificado en el top 100 del servidor</p>
    </div>
  </body>
</html>
```

### Leccion 11

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Crear personaje ⚔️</title>
  </head>
  <body>
    <h1>⚔️ Creá tu personaje</h1>
    <form>

      <label for="raza">Raza:</label><br>
      <select id="raza" name="raza">
        <option value="humano">Humano</option>
        <option value="elfo">Elfo</option>
        <option value="enano">Enano</option>
        <option value="orco">Orco</option>
      </select><br><br>

      <label for="clase">Clase:</label><br>
      <select id="clase" name="clase">
        <option value="guerrero">Guerrero</option>
        <option value="mago">Mago</option>
        <option value="arquero">Arquero</option>
        <option value="ladron">Ladrón</option>
      </select><br><br>

      <label for="dificultad">Dificultad:</label><br>
      <select id="dificultad" name="dificultad">
        <option value="facil">Fácil</option>
        <option value="normal">Normal</option>
        <option value="dificil">Difícil</option>
        <option value="legendario">Legendario</option>
      </select><br><br>

      <button type="submit">¡Comenzar aventura! ⚔️</button>
    </form>
  </body>
</html>
```

### Leccion 12

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Encuesta Gamer 🎮</title>
  </head>
  <body>
    <h1>🎮 ¿Qué tipo de gamer sos?</h1>

    <form>
      <h2>¿Cómo preferís jugar?</h2>
      <input type="radio" id="competitivo" name="estilo" value="competitivo">
      <label for="competitivo">Competitivo</label><br>

      <input type="radio" id="casual" name="estilo" value="casual">
      <label for="casual">Casual</label><br>

      <input type="radio" id="cooperativo" name="estilo" value="cooperativo">
      <label for="cooperativo">Cooperativo</label><br><br>

      <h2>¿Qué géneros te gustan?</h2>
      <input type="checkbox" id="rpg" name="genero_rpg" value="rpg">
      <label for="rpg">RPG</label><br>

      <input type="checkbox" id="fps" name="genero_fps" value="fps">
      <label for="fps">FPS</label><br>

      <input type="checkbox" id="estrategia" name="genero_estrategia" value="estrategia">
      <label for="estrategia">Estrategia</label><br>

      <input type="checkbox" id="deportes" name="genero_deportes" value="deportes">
      <label for="deportes">Deportes</label><br>

      <input type="checkbox" id="aventura" name="genero_aventura" value="aventura">
      <label for="aventura">Aventura</label><br><br>

      <button type="submit">Enviar encuesta 🎯</button>
    </form>
  </body>
</html>
```

### Leccion 13

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Torneo de Esports 🏆</title>
  </head>
  <body>
    <h1>🏆 Torneo de Esports</h1>
    <h2>Formulario de inscripción</h2>

    <form action="/inscripcion" method="post">

      <label for="nombre">Nombre del jugador:</label><br>
      <input type="text" id="nombre" name="nombre" placeholder="Tu apodo gamer"><br><br>

      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" placeholder="tu@email.com"><br><br>

      <label for="categoria">Categoría:</label><br>
      <select id="categoria" name="categoria">
        <option value="amateur">Amateur</option>
        <option value="semipro">Semi-pro</option>
        <option value="pro">Pro</option>
      </select><br><br>

      <p>Modalidad:</p>
      <input type="radio" id="individual" name="modalidad" value="individual">
      <label for="individual">Individual</label><br>
      <input type="radio" id="equipo" name="modalidad" value="equipo">
      <label for="equipo">Poriequipos</label><br><br>

      <input type="checkbox" id="acepto" name="acepto" value="si">
      <label for="acepto">Acepto las bases del torneo</label><br><br>

      <button type="submit">¡Inscribirme! 🏆</button>

    </form>
  </body>
</html>
```

---

## CSS (6 lecciones)

### Leccion 1

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
body {
  background-color: #1a1a2e;
}

h1 {
  color: hotpink;
}

p {
  color: #a8dadc;
}
```

### Leccion 2

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
h2 {
  color: #7c3aed;
  border-bottom: 2px solid #7c3aed;
}

.tarjeta {
  background-color: #1e1e2e;
  color: #cdd6f4;
  padding: 8px 12px;
  border-radius: 6px;
  margin: 4px 0;
}

#especial {
  font-size: 24px;
  color: gold;
  font-weight: bold;
}
```

### Leccion 3

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
body {
  background-color: #0f0f1a;
  color: white;
}

h1 {
  color: hotpink;
}

h2 {
  color: #4ecdc4;
}

.cancion {
  color: rgb(200, 200, 220);
  background-color: #1e1e2e;
}

#favorita {
  color: gold;
  background-color: rgb(30, 20, 50);
}
```

### Leccion 4

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
body {
  font-family: Georgia, serif;
  background-color: #0f0f1a;
  color: #e2e8f0;
}

h1 {
  text-align: center;
  color: #c89cff;
}

h2 {
  font-size: 24px;
  color: #a78bfa;
}

.opinion {
  font-style: italic;
  color: #818cf8;
}

a {
  text-decoration: none;
  color: #c89cff;
}
```

### Leccion 5

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
body {
  background-color: #0f0f1a;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.tarjeta {
  background-color: #1e1e2e;
  padding: 16px 24px;
  border: 2px solid #7c3aed;
  border-radius: 12px;
  margin: 16px 0;
  max-width: 320px;
}
```

### Leccion 6

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**style.css:**
```css
body {
  font-family: Arial, sans-serif;
  background-color: #0f0f1a;
  color: white;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 24px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #7c3aed;
  border-radius: 6px;
}

h1 { margin: 24px 0 16px; }

.tarjetas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tarjeta {
  background-color: #1e1e2e;
  padding: 16px;
  border-radius: 8px;
  width: 140px;
  text-align: center;
}
```

---

## JavaScript (6 lecciones)

### Leccion 1

**index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera app JS ⚡</title>
  </head>
  <body>
    <h1 id="titulo">Hola, mundo</h1>
    <p id="mensaje">Este texto va a cambiar con JavaScript.</p>
    <p id="estado">Estado: apagado</p>
  </body>
</html>
```

**script.js:**
```javascript
// Cambiar el texto del título
document.getElementById('titulo').textContent = '¡JavaScript funciona!';

// Cambiar el color del mensaje
document.getElementById('mensaje').style.color = 'hotpink';

// Cambiar el estado
document.getElementById('estado').textContent = 'Estado: encendido';
document.getElementById('estado').style.color = 'limegreen';
```

### Leccion 2

**index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi perfil 📦</title>
  </head>
  <body>
    <h1>Mi perfil 📦</h1>
    <p id="saludo">Acá va a aparecer tu mensaje...</p>
    <p id="extra"></p>
  </body>
</html>
```

**script.js:**
```javascript
let nombre = 'Sofía';
const materia = 'Programación';

document.getElementById('saludo').textContent =
  `Hola, me llamo ${nombre} y mi materia favorita es ${materia}.`;

let nota1 = 8;
let nota2 = 9;
document.getElementById('extra').textContent =
  `Promedio de notas: ${(nota1 + nota2) / 2}`;
```

### Leccion 3

**index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Clima hoy 🌤️</title>
  </head>
  <body>
    <h1>🌤️ ¿Qué tiempo hace?</h1>
    <p id="clima">Calculando...</p>
    <p id="detalle"></p>
  </body>
</html>
```

**script.js:**
```javascript
let temperatura = 35;

if (temperatura > 30) {
  document.getElementById('clima').textContent = 'Hace calor 🔥';
  document.getElementById('clima').style.color = 'tomato';
} else if (temperatura < 10) {
  document.getElementById('clima').textContent = 'Hace frío 🧊';
  document.getElementById('clima').style.color = '#38bdf8';
} else {
  document.getElementById('clima').textContent = 'Temperatura agradable 😊';
  document.getElementById('clima').style.color = 'limegreen';
}

document.getElementById('detalle').textContent =
  `La temperatura actual es ${temperatura}°C`;
```

### Leccion 4

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**script.js:**
```javascript
function calcularPromedio(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

let promedio = calcularPromedio(8, 7, 9);

document.getElementById('resultado').textContent = `Promedio: ${promedio}`;

if (promedio >= 6) {
  document.getElementById('estado').textContent = '✓ Aprobado';
  document.getElementById('estado').style.color = 'limegreen';
} else {
  document.getElementById('estado').textContent = '✗ Desaprobado';
  document.getElementById('estado').style.color = 'tomato';
}
```

### Leccion 5

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**script.js:**
```javascript
// 1. Cambiar el h2 con querySelector
document.querySelector('h2').textContent = '🎬 Mis series favoritas';

// 2. Cambiar el color de todos los li
let items = document.querySelectorAll('li');
items.forEach(function(item) {
  item.style.color = '#a78bfa';
});

// 3. Usar innerHTML para poner HTML en #info
document.querySelector('#info').innerHTML =
  `<strong>Total:</strong> ${items.length} series en la lista.`;
```

### Leccion 6

**index.html:**
```html
<!DOCTYPE html>
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
</html>
```

**script.js:**
```javascript
let clics = 0;
let boton = document.getElementById('btn-cambiar');

boton.addEventListener('click', function() {
  clics = clics + 1;

  document.getElementById('contador').textContent = `Clics: ${clics}`;

  if (clics % 2 === 0) {
    document.getElementById('mensaje').textContent = '¡Par! 🟢';
    document.getElementById('mensaje').style.color = 'limegreen';
  } else {
    document.getElementById('mensaje').textContent = '¡Impar! 🔴';
    document.getElementById('mensaje').style.color = 'tomato';
  }
});
```

