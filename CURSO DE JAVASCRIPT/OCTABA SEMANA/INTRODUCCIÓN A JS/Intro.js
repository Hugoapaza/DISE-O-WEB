// ===============================
// 1. TIPOS DE DATOS EN JAVASCRIPT
// ===============================

// Número
let Edad = 30;
console.log("Número:", Edad);

// Cadena de texto (string)
let Nombre = "Juan";
console.log("String:", Nombre);

// Booleano (true o false)
let esMayor = true;
console.log("Booleano:", esMayor);

// Undefined (valor no definido)
let SinValor;
console.log("Undefined:", SinValor);

// Null (valor nulo explícito)
let Vacio = null;
console.log("Null:", Vacio);

// Array (lista de elementos)
let fruta = ["manzana", "banana", "pera"];
console.log("Array:", fruta);

// Objeto (estructura con propiedades)
let Persona = {
  nombre: "Ana",
  edad: 25,
  casado: false
};
console.log("Objeto:", Persona);



// ===============================
// 2. CÓMO CAPTURAR DATOS DEL USUARIO
// ===============================

// Usando prompt (solo en navegador)
// Esto abre un cuadro de entrada para que el usuario escriba algo

let nombreDeUsuario = prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado:", nombreDeUsuario);

// Otro ejemplo: pedir la edad
let edadUsuario = prompt("¿Cuántos años tienes?");
console.log("Edad ingresada (como string):", edadUsuario);

// IMPORTANTE:
// Los valores que se capturan con `prompt()` son tipo string,
// incluso si el usuario escribe un número



// =========================================
// 3. CONVERSIÓN A TIPO NUMÉRICO (Muy útil)
// =========================================

// Supongamos que capturamos la edad como texto
let edadTexto = prompt("Ingresa tu edad:");
console.log("Tipo antes de convertir:", typeof edadTexto); // string

// Convertir a número usando Number()
let edadNumero = Number(edadTexto);

// Validar si es realmente un número
if (!isNaN(edadNumero)) {
  console.log("Edad como número:", edadNumero);
  console.log("Tipo después de convertir:", typeof edadNumero); // number

  if (edadNumero >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
} else {
  console.log("Lo que escribiste no es un número válido.");
}

// Pedimos un número al usuario (por ejemplo, su edad)
let EdadTexto = prompt("Ingresa tu edad:");

// Convertimos el texto a número entero usando parseInt()
let edadEntero = parseInt(EdadTexto);

// Verificamos si es un número válido
if (!isNaN(EdadEntero)) {
  console.log("Edad como número entero:", EdadEntero);

  if (EdadEntero >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
} else {
  console.log("Lo que escribiste no es un número válido.");
}


//Ejemplo explicado (todo en comentarios y ejemplos)

/* ===========================================================
Variables y tipos de datos
==============================================================

Para qué sirve: almacenar información (texto, números, true/false, estructuras).

Uso: elegir el tipo apropiado para representar datos y usar typeof para comprobar.
*/


/*string → texto

number → números enteros y decimales

bigint → enteros muy grandes

boolean → verdadero/falso

undefined → declarado sin valor

null → ausencia intencional de valor

symbol → identificadores únicos*/

/*========================================================================
Tipos de Datos en JavaScript
=========================================================================*/
/*----------------------------------------------------------------------------------------------------------------------------|
| Tipo de Dato  | Ejemplo                                         | Uso común                                                 |
| ------------- | ----------------------------------------------- | --------------------------------------------------------- |
| **String**    | `let nombre = "Ana";`                           | Texto, mensajes, cadenas de caracteres                    |
| **Number**    | `let edad = 25;`                                | Números enteros o decimales                               |
| **BigInt**    | `let grande = 12345678901234567890n;`           | Números enormes (más grandes que Number)                  |
| **Boolean**   | `let activo = true;`                            | Valores lógicos (sí/no, on/off)                           |
| **Undefined** | `let x;`                                        | Variable declarada sin valor                              |
| **Null**      | `let vacio = null;`                             | Ausencia intencional de valor                             |
| **Symbol**    | `let id = Symbol("id");`                        | Identificadores únicos (no se repiten)                    |
| **Object**    | `let persona = {nombre:"Luis", edad:30};`       | Agrupar información en pares clave:valor                  |
| **Array**     | `let frutas = ["pera", "uva"];`                 | Listas ordenadas de elementos                             |
| **Function**  | `function suma(a,b){ return a+b; }`             | Bloques de código reutilizables                           |
| **Date**      | `let hoy = new Date();`                         | Fechas y horas                                            |
| **RegExp**    | `let patron = /hola/i;`                         | Búsqueda de patrones en texto                             |
| **Map**       | `let mapa = new Map(); mapa.set("clave", 123);` | Claves y valores (pueden ser cualquier tipo)              |
| **Set**       | `let conjunto = new Set([1,2,2,3]);`            | Colecciones de valores únicos                             |
| **WeakMap**   | `let wm = new WeakMap();`                       | Map con claves que son objetos, se eliminan si no se usan |
| **WeakSet**   | `let ws = new WeakSet();`                       | Set que solo guarda objetos y permite limpieza de memoria |
|---------------|-------------------------------------------------|-----------------------------------------------------------|*/

/*=============================================================
// 1) Primitivos (7 tipos)
===============================================================*/
// 1. String → texto
let texto = "Hola Mundo";         // Cadena de caracteres
let nombres = 'Ana';               // También con comillas simples
let saludo = `Hola ${nombres}`;    // Template string con backticks

// 2. Number → números (enteros y decimales)
let edad = 25;       // número entero
let pi = 3.1416;     // número decimal
let infinito = Infinity;  // número especial
let noEsNumero = NaN;     // resultado inválido de una operación

// 3. BigInt → enteros muy grandes
let numeroGrande = 123456789012345678901234567890n; // se pone la "n" al final

// 4. Boolean → verdadero o falso
let encendido = true;
let apagado = false;

// 5. Undefined → variable declarada pero sin valor asignado
let sinValor;    // undefined automáticamente

// 6. Null → ausencia intencionada de valor
let vacio = null;

// 7. Symbol → identificadores únicos
let id = Symbol("id");
let otroId = Symbol("id"); // siempre será diferente a "id"
/*=============================================================
//2) De referencia (Objetos y derivados)
===============================================================*/

// 1. Object → colección de pares clave:valor
let persona = {
  nombre: "Carlos",
  edad: 30,
  activo: true
};

// 2. Array → lista ordenada de elementos (es un objeto especial)
let frutas = ["manzana", "pera", "uva"];

// 3. Function → funciones también son objetos
function saludar() {
  return "Hola!";
}

// 4. Date → manejar fechas y horas
let hoy = new Date();

// 5. RegExp → expresiones regulares para buscar patrones en textos
let patron = /hola/i;  // la "i" significa insensible a mayúsculas

// 6. Map → colección de pares clave-valor, acepta cualquier tipo de clave
let mapa = new Map();
mapa.set("nombre", "Ana");
mapa.set(123, "número");

// 7. Set → colección de valores únicos
let conjunto = new Set([1, 2, 2, 3]); // guarda solo {1, 2, 3}

// 8. WeakMap → similar a Map pero con claves de tipo objeto y recolección de memoria
let weakMapa = new WeakMap();
let obj = {};
weakMapa.set(obj, "valor");

// 9. WeakSet → similar a Set pero solo acepta objetos y permite recolección de memoria
let weakConjunto = new WeakSet();
let objeto = {};
weakConjunto.add(objeto);


//=============================================================
// Variables y tipos básicos
let nombre = "María";            // string (texto)
const edad = 30;                 // number (números)
let esEstudiante = true;         // boolean (true/false)
let valorNulo = null;            // null -> ausencia intencionada de valor
let sinValor;                    // undefined -> no se le asignó valor aún
let persona = {                  // object -> colección de pares clave:valor
  nombre: "Luis",
  edad: 28
};

console.log(typeof nombre);      // "string"
console.log(typeof edad);         // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof valorNulo);    // "object" (quirk histórico)
console.log(typeof sinValor);     // "undefined"
console.log(typeof persona);      // "object"

/* ===========================================================
2) Operadores (aritméticos, lógicos, relacionales)
==============================================================

Para qué sirve: hacer cálculos, comparar valores y combinar condiciones.
*/

// Aritméticos
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1  (resto)
console.log(a ** 2); // 100 (potencia)

// Relacionales (comparaciones)
console.log(a > b);   // true
console.log(a === "10"); // false -> === compara valor y tipo

// Lógicos
let cond1 = true, cond2 = false;
console.log(cond1 && cond2); // false  (AND)
console.log(cond1 || cond2); // true   (OR)
console.log(!cond1);         // false  (NOT)

/* ===========================================================
3) Condicionales (if, else, switch)
==============================================================

Para qué sirve: ejecutar código solo si se cumplen condiciones.
*/

let temperatura = 25;

if (temperatura > 30) {
  console.log("Hace calor");
} else if (temperatura >= 20) {
  console.log("Templado");
} else {
  console.log("Hace fresco");
}

// switch: útil para múltiples casos concretos
let dia = 3;
switch (dia) {
  case 1: console.log("Lunes"); break;
  case 2: console.log("Martes"); break;
  case 3: console.log("Miércoles"); break;
  default: console.log("Otro día");
}

/* ===========================================================
4) Bucles (for, while, for...of, for...in)
==============================================================

Para qué sirve: repetir acciones (iterar arrays, objetos, etc.).
*/

const numeros = [1, 2, 3, 4, 5];

// for clásico
for (let i = 0; i < numeros.length; i++) {
  console.log("for index", i, numeros[i]);
}

// for...of -> iterar valores de un iterable (p. ej. array)
for (const num of numeros) {
  console.log("for...of value", num);
}

// for...in -> iterar claves/propiedades de un objeto
const obj = { a: 1, b: 2, c: 3 };
for (const clave in obj) {
  console.log("propiedad", clave, "valor", obj[clave]);
}

// while -> repetir hasta que la condición deje de cumplirse
let contador = 3;
while (contador > 0) {
  console.log("while:", contador);
  contador--;
}

// break (sale del bucle) y continue (salta a la siguiente iteración)
for (const n of numeros) {
  if (n === 3) continue; // salta el 3
  if (n === 5) break;    // termina el bucle
  console.log("after control:", n);
}

/* ===========================================================
5) Funciones (declaración, expresión, arrow functions)
==============================================================

Para qué sirve: agrupar código reutilizable y separar lógica.
*/

// Declaración de función (hoisteada)
function sumar(x, y) {
  return x + y;
}
console.log(sumar(2, 3));

// Expresión de función (no hoisteada)
const restar = function(x, y) {
  return x - y;
};
console.log(restar(10, 4));

// Arrow function (más concisa)
const multiplicar = (x, y) => x * y;
console.log(multiplicar(3, 5));

// Parámetros por defecto y rest
function ejemploParametros(a = 1, ...resto) {
  console.log("a:", a, "resto:", resto);
}
ejemploParametros(undefined, 2, 3, 4);

/* ===========================================================
6) Ámbito de variables (var, let, const)
==============================================================

Para qué sirve: controlar dónde es accesible una variable.
*/

// var -> ámbito de función, hoisting (se declara al inicio, valor undefined)
function usarVar() {
  console.log(miVar); // undefined (existe pero aún no asignada)
  var miVar = 10;
  console.log(miVar); // 10
}
usarVar();

// let/const -> ámbito de bloque, no hoisting accesible (TDZ)
if (true) {
  let x = 5;
  const y = 6;
  // x y y existen solo dentro de este bloque
}
// console.log(x); // ERROR: x no definido

// const -> constante (no reasignable), atención: objetos/arrays pueden mutar sus contenidos
const personaConst = { nombre: "Ana" };
personaConst.nombre = "Ana María"; // válido: mutación de propiedad
// personaConst = {}; // ERROR: reasignación no permitida

/* ===========================================================
7) Arreglos y objetos (cómo almacenan y manejan datos)
==============================================================

Para qué sirve: colecciones (listas) y estructuras con claves (objetos).
*/

const lista = ["manzana", "pera", "uva"];
lista.push("naranja");     // añade al final
console.log(lista);
console.log(lista[0]);     // acceso por índice
console.log(lista.length); // tamaño

// Métodos útiles: map, filter, reduce
const numerosDobles = [1,2,3].map(n => n * 2); // [2,4,6]
const pares = [1,2,3,4].filter(n => n % 2 === 0); // [2,4]
const suma = [1,2,3,4].reduce((acc, n) => acc + n, 0); // 10

// Objetos
const usuario = {
  nombre: "Carlos",
  email: "carlos@ejemplo.com"
};
// Acceso
console.log(usuario.nombre);
console.log(usuario["email"]);
// Destructuring (sacar propiedades)
const { nombre: nombreUsuario, email } = usuario;
console.log(nombreUsuario, email);

/* ===========================================================
8) Manipulación del DOM (document.querySelector, innerHTML, style, events)
==============================================================

Para qué sirve: cambiar lo que ve el usuario en la página desde JS.

Nota: este código debe ejecutarse en un navegador con ese HTML.
/
/ HTML de ejemplo que necesitarías en tu página:
<button id="miBoton">Haz click</button>

<div id="salida"></div> */ 


// Seleccionar elementos const boton = document.querySelector('#miBoton'); // o getElementById('miBoton') const salida = document.querySelector('#salida');

// Modificar contenido
if (salida) {
salida.innerHTML = '<strong>Mensaje inicial</strong>'; // inserta HTML
// salida.textContent = 'Texto plano'; // inserta solo texto
}

// Modificar estilos
if (boton) {
boton.style.padding = "10px 20px";
boton.classList.add("activo"); // agregar clase CSS
}

// Ejemplo: cambiar el contenido al hacer click (evento)
if (boton) {
boton.addEventListener('click', function (evento) {
salida.innerHTML = <p>¡Me clickeaste! Tiempo: ${new Date().toLocaleTimeString()}</p>;
});
}


/* ===========================================================
   9) Eventos (onclick, addEventListener, event object)
   ===========================================================*/

//- Para qué sirve: responder a acciones del usuario (click, submit, input...).
// Preferible usar addEventListener para poder añadir multiples handlers
const enlace = document.querySelector('a.mi-enlace');
if (enlace) {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // evita la acción por defecto (navegar)
    console.log('Se hizo click en el enlace', e.target.href);
  });
}

// Formularios: capturar submit
const form = document.querySelector('#miForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // evitar recarga de página
    // leer campos y procesar
  });
}

/* ===========================================================
10) Funciones anónimas y callbacks
==============================================================

Para qué sirve: pasar lógica como argumento (callbacks) o usar funciones sin nombre.
*/

// Función que recibe un callback
function procesar(valor, callback) {
  // hace trabajo...
  const resultado = valor * 2;
  callback(resultado); // invoca la función pasada
}

// Usando una función anónima como callback
procesar(5, function(res) {
  console.log("Resultado desde callback:", res);
});

// Arrow function anónima
procesar(10, res => console.log("Arrow callback:", res));

/* ===========================================================
11) JSON (formato de datos muy usado)

Para qué sirve: intercambiar datos entre cliente y servidor, guardar en localStorage.
*/

const objeto = { nombre: "Paola", edad: 22 };
// Convertir a JSON (string) para enviar o guardar
const jsonTexto = JSON.stringify(objeto);
console.log(jsonTexto); // '{"nombre":"Paola","edad":22}'

// Convertir JSON a objeto (parse)
const parseado = JSON.parse(jsonTexto);
console.log(parseado.nombre); // "Paola"

// Ejemplo de uso: localStorage.setItem('usuario', jsonTexto)

/* ===========================================================
12) Manejo de errores (try...catch)

Para qué sirve: capturar errores en tiempo de ejecución y manejar fallos sin romper la app.
*/

try {
  // código que puede fallar
  const res = JSON.parse("texto no válido"); // lanzará error
  console.log(res);
} catch (error) {
  console.error("Hubo un error al parsear JSON:", error.message);
} finally {
  console.log("Esto siempre se ejecuta (limpieza, cerrar conexiones, etc.)");
}

// Puedes lanzar errores manualmente
function dividir(x, y) {
  if (y === 0) throw new Error("División por cero no permitida");
  return x / y;
}
try {
  dividir(10, 0);
} catch (e) {
  console.warn(e.message);
}

/* ===========================================================
13) Introducción a programación asíncrona
(setTimeout, setInterval, Promesas, async/await)

Para qué sirve: operaciones que tardan (peticiones de red, timers, lectura de archivos).
*/

// setTimeout: ejecutar algo después de un tiempo
setTimeout(() => {
  console.log("Ejecutado después de 1 segundo");
}, 1000);

// setInterval: repetir cada intervalo (importante limpiar con clearInterval)
const idInterval = setInterval(() => {
  console.log("Ping cada 2s");
}, 2000);
// clearInterval(idInterval); // cuando quieras detenerlo

// Promesa básica
function tareaAsincronaSimulada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) resolve("Tarea completada");
      else reject(new Error("Algo falló"));
    }, 1200);
  });
}

// Usar promesas con then/catch
tareaAsincronaSimulada()
  .then(resultado => console.log("Promise:", resultado))
  .catch(err => console.error("Promise Error:", err.message));

// async/await (sintaxis más legible para promesas)
async function ejecutar() {
  try {
    const resultado = await tareaAsincronaSimulada();
    console.log("await:", resultado);
  } catch (error) {
    console.error("await error:", error.message);
  }
}
ejecutar();

/* ===========================================================
Consejos rápidos finales

Practica con mini proyectos: calculadora, lista de tareas (todo list), reloj, formulario con validación.

Usa la consola (console.log) para depurar y el inspector del navegador (F12).

Lee MDN (documentación) cuando tengas dudas.

Aprende a usar Git para guardar tus proyectos.
*/

/* ===========================================================
Proyectos de práctica recomendados (pequeños pasos):

"Hola Mundo" + manipular DOM (cambiar texto al click).

Crear una calculadora básica (operaciones).

ToDo list con agregar/eliminar tareas (usar arrays y localStorage con JSON).

Hacer peticiones a una API (fetch) y mostrar resultados (usar async/await).

Juego simple: adivina el número (bucles, condiciones, eventos).
===========================================================
*/

