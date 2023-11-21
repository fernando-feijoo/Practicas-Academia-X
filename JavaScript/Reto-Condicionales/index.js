// --> Para crear un número aleatorio del 1 al 50. <--
let array = Array.from({length: 50}, (_, i) => i + 1); // Crea un array del 1 al 50
let randomIndex = Math.floor(Math.random() * array.length); // Obtiene un índice aleatorio
let randomNumber = array[randomIndex]; // Obtiene el número en el índice aleatorio

if (randomNumber >= 18) {
    console.log("Eres mayor de edad con " + randomNumber + " años.")
}else{
    console.log("Eres menor de edad con " + randomNumber + " años.")
}

// --> Para seleccionar una opción de un arreglo. <--
let opciones = ["crear", "colocar", "actualizar", "borrar"]; // Define las opciones
let indiceAleatorio = Math.floor(Math.random() * opciones.length); // Obtiene un índice aleatorio
let opcionAleatoria = opciones[indiceAleatorio]; // Obtiene la opción en el índice aleatorio

console.log("La acción es "+ opcionAleatoria + "."); // Imprime la opción aleatoria

// --> Para saber si un número es par o impar. <--
if (randomNumber % 2 === 0) {
    console.log("El número " + randomNumber + " es par.");
  } else {
    console.log("El número " + randomNumber + " es impar.");
  }