# Soluciones de Desafíos — Aprende a Programar

> Este archivo es solo para uso docente.

---

## HTML

### Desafío 1: Mi carta de presentación (Fácil · 50 XP)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi presentación</title>
</head>
<body>
  <h1>Sofía López</h1>
  <img src="https://picsum.photos/150" alt="Mi foto">
  <p>Hola, soy Sofía. Tengo 16 años y me encanta la tecnología y el diseño web.</p>
  <h2>Mis hobbies</h2>
  <ul>
    <li>Programar</li>
    <li>Dibujar</li>
    <li>Escuchar música</li>
  </ul>
  <a href="https://www.youtube.com">Mi sitio favorito: YouTube</a>
</body>
</html>
```

### Desafío 2: Menú de restaurante (Medio · 100 XP)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Restaurante</title>
</head>
<body>
  <h1>La Parrilla del Puerto 🥩</h1>

  <table border="1">
    <thead>
      <tr>
        <th>Plato</th>
        <th>Descripción</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Asado mixto</td>
        <td>Costilla, vacío y chorizo con guarnición</td>
        <td>$450</td>
      </tr>
      <tr>
        <td>Milanesa napolitana</td>
        <td>Con jamón, queso y salsa, papas fritas</td>
        <td>$380</td>
      </tr>
      <tr>
        <td>Ensalada César</td>
        <td>Lechuga, pollo grillado, crutones y parmesano</td>
        <td>$280</td>
      </tr>
    </tbody>
  </table>

  <h2>Reservar mesa</h2>
  <form>
    <label>Nombre:</label><br>
    <input type="text" name="nombre" placeholder="Tu nombre"><br><br>
    <label>Fecha:</label><br>
    <input type="date" name="fecha"><br><br>
    <button type="submit">Reservar</button>
  </form>
</body>
</html>
```

### Desafío 3: Formulario de registro (Difícil · 200 XP)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro</title>
</head>
<body>
  <h1>Crear cuenta</h1>
  <form>
    <label>Nombre:</label><br>
    <input type="text" name="nombre" placeholder="Tu nombre"><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" placeholder="tu@email.com"><br><br>

    <label>Contraseña:</label><br>
    <input type="password" name="password" placeholder="********"><br><br>

    <label>Fecha de nacimiento:</label><br>
    <input type="date" name="nacimiento"><br><br>

    <label>País:</label><br>
    <select name="pais">
      <option value="uy">Uruguay</option>
      <option value="ar">Argentina</option>
      <option value="br">Brasil</option>
    </select><br><br>

    <label>Sobre mí:</label><br>
    <textarea name="bio" rows="4" cols="40" placeholder="Contanos sobre vos..."></textarea><br><br>

    <input type="checkbox" name="terminos" id="terminos">
    <label for="terminos">Acepto los términos y condiciones</label><br><br>

    <button type="submit">Crear cuenta</button>
  </form>
</body>
</html>
```

---

## CSS

### Desafío 1: Tarjeta de perfil (Fácil · 50 XP)

**style.css:**
```css
body {
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.nombre {
  color: #1e293b;
  margin: 16px 0 4px;
}

.rol {
  color: #64748b;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 20px;
}

.stat {
  text-align: center;
}

.stat strong {
  display: block;
  font-size: 1.2rem;
  color: #7c3aed;
}

.stat span {
  font-size: 0.8rem;
  color: #94a3b8;
}
```

### Desafío 2: Navbar con Flexbox (Medio · 100 XP)

**style.css:**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1e2e;
  padding: 12px 24px;
}

.logo {
  color: #7c3aed;
  font-size: 1.3rem;
  font-weight: bold;
}

.links {
  list-style: none;
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.links a {
  text-decoration: none;
  color: #cbd5e1;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.2s;
}

.links a:hover {
  background: #2a2a4a;
  color: white;
}

.btn-cta {
  background: #7c3aed !important;
  color: white !important;
  border-radius: 6px;
}

.btn-cta:hover {
  background: #6d28d9 !important;
}
```

### Desafío 3: Galería con Grid (Difícil · 200 XP)

**style.css:**
```css
body {
  background-color: #0f0f1a;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #a78bfa;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 900px;
  margin: 0 auto;
}

.foto {
  overflow: hidden;
  border-radius: 8px;
}

.foto img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.foto:hover img {
  transform: scale(1.08);
}

.foto:first-child {
  grid-column: span 2;
}
```

---

## JavaScript

### Desafío 1: Contador interactivo (Fácil · 50 XP)

**script.js:**
```javascript
const numero   = document.getElementById('numero');
const btnMas   = document.getElementById('btn-mas');
const btnMenos = document.getElementById('btn-menos');
const btnReset = document.getElementById('btn-reset');

let cuenta = 0;

btnMas.addEventListener('click', function() {
  cuenta++;
  numero.textContent = cuenta;
});

btnMenos.addEventListener('click', function() {
  if (cuenta > 0) {
    cuenta--;
  }
  numero.textContent = cuenta;
});

btnReset.addEventListener('click', function() {
  cuenta = 0;
  numero.textContent = cuenta;
});
```

### Desafío 2: Lista de tareas (Medio · 100 XP)

**script.js:**
```javascript
const input      = document.getElementById('nueva-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista      = document.getElementById('lista');

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'texto-tarea';
  span.textContent = texto;

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn-eliminar';
  btnEliminar.textContent = '✕';

  btnEliminar.addEventListener('click', function(e) {
    e.stopPropagation();
    li.remove();
  });

  li.addEventListener('click', function() {
    li.classList.toggle('completada');
  });

  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = '';
}

btnAgregar.addEventListener('click', agregarTarea);

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') agregarTarea();
});
```

### Desafío 3: Calculadora (Difícil · 200 XP)

**script.js:**
```javascript
const display = document.getElementById('display');
let expresion = '';

function presionar(valor) {
  expresion += valor;
  display.textContent = expresion;
}

function limpiar() {
  expresion = '';
  display.textContent = '0';
}

function calcular() {
  try {
    let resultado = eval(expresion);
    if (resultado === Infinity || isNaN(resultado)) {
      display.textContent = 'Error';
      expresion = '';
      return;
    }
    display.textContent = resultado;
    expresion = resultado.toString();
  } catch (e) {
    display.textContent = 'Error';
    expresion = '';
  }
}
```
