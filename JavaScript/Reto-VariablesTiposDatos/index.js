let welcome = "¡Hola Mundo!";
let nombre = "Fernando";

// 1° linea de saludo y nombre:
console.log(welcome + " Soy " + nombre);

// 2° linea nombre en mayusculas:
let nombreMayus = nombre.toUpperCase();
console.log("Mi nombre en mayúsculas es: " + nombreMayus);

// 3° linea nombre en minusculas:
let nombreMin = nombre.toLowerCase();
console.log("Mi nombre en minúsculas es: " + nombreMin);

// 4° linea conteo de caracteres del mensaje:
console.log(
  "El mensaje de '" + welcome + "' tiene " + welcome.length + " caracteres."
);

// 5° linea número del array:
let array = [1, 2, 3, 4, 5];
let thirdNum = 0;
for (let index = 0; index < array.length; index++) {
    if (index = 2) {
        thirdNum = array[index];
        break;
    }
}
console.log(
  "El tercer número del array con los valores '" + array + "' es: " + thirdNum
);

// 6° linea añadir número al final del array:
array = array.concat(6);
let lastNum = 0;
for (let index = 0; index < array.length; index++) {
  if ((index = array.length - 1)) {
    lastNum = array[index];
  }
}
console.log(
  "Se añade el número que sigue al final del arreglo y es: " + lastNum
);

// 7° linea encontrar la palabra en una cadena de texto.
let cadena = "'La lluvia en Sevilla es una maravilla.'";
let palabra = "lluvia";
let busqueda = cadena.match(/\blluvia\b/);
console.log("Se encontró el patrón '" + palabra + "' en el texto " + cadena + ", por lo que el resultado es: " + busqueda);