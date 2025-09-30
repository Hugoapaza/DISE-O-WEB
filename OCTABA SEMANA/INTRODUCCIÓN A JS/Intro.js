// ===============================
// 1. TIPOS DE DATOS EN JAVASCRIPT
// ===============================

// Número
let edad = 30;
console.log("Número:", edad);

// Cadena de texto (string)
let nombre = "Juan";
console.log("String:", nombre);

// Booleano (true o false)
let esMayor = true;
console.log("Booleano:", esMayor);

// Undefined (valor no definido)
let sinValor;
console.log("Undefined:", sinValor);

// Null (valor nulo explícito)
let vacio = null;
console.log("Null:", vacio);

// Array (lista de elementos)
let frutas = ["manzana", "banana", "pera"];
console.log("Array:", frutas);

// Objeto (estructura con propiedades)
let persona = {
  nombre: "Ana",
  edad: 25,
  casado: false
};
console.log("Objeto:", persona);



// ===============================
// 2. CÓMO CAPTURAR DATOS DEL USUARIO
// ===============================

// Usando prompt (solo en navegador)
// Esto abre un cuadro de entrada para que el usuario escriba algo

let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado:", nombreUsuario);

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

