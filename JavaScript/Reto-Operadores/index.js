// Inicialización de variables para futuros usos.
let numUno = 1;
let numDos = 2;

let textoUno = "Fernando";
let textoDos = "Fernando";

const objUno = { valor: "Feijoo" };
const objDos = { valor: "Feijoo" };

// #Logicas

// 1° Linea:
let text = `1. ¿El número ${numUno} es mayor que el número ${numDos}? `;
let comparacion = numUno > numDos;

Respuesta(text, comparacion);

// 2° Linea:
text = text = `2. ¿El número ${numUno} es menor que el número ${numDos}? `;
comparacion = numUno < numDos;

Respuesta(text, comparacion);

// 3° Linea:
text = text = `3. ¿El número ${numUno} es igual que el número ${numDos}? `;
comparacion = numUno == numDos;

Respuesta(text, comparacion);

// 4° Linea:
text = `4. ¿El texto 1: ${textoUno} es igual al texto 2: ${textoDos}? `;
comparacion = textoUno === textoDos;

Respuesta(text, comparacion);

// 5° Linea:
text = `5. ¿Los objetos son iguales? `;
comparacion = objUno == objDos;

Respuesta(text, comparacion);

// 6° Linea:
text = `6. AND lógico: `;
comparacion = true && false;

Respuesta(text, comparacion);

// 7° Linea:
text = `7. OR lógico: `;
comparacion = true || false;

Respuesta(text, comparacion);

/**
 * Imprime un mensaje en la consola, concatenando un texto y un valor opcionalmente.
 * Si se proporciona un valor de comparación, se concatena con el texto; de lo contrario, solo se imprime el texto.
 *
 * @param {string} text - El texto base que se imprimirá.
 * @param {boolean} comparacion - El valor necesario que se concatenará con el texto.
 */
function Respuesta(text, comparacion) {
  return comparacion ? console.log(text + comparacion) : console.log(text + comparacion);
}

// #fin Logicas

// Operadores matematicos:

// 8° Linea:
numUno = 10;
numDos = 3;
text = `8. La suma de ${numUno} + ${numDos}: `;

console.log(text + (numUno + numDos));

// 9° Linea:
text = `9. La resta de ${numUno} - ${numDos}: `;

console.log(text + (numUno - numDos));

// 10° Linea:
text = `10. La multiplicación de ${numUno} * ${numDos}: `;

console.log(text + (numUno * numDos));

// 11° Linea:
text = `11. La división de ${numUno} / ${numDos}: `;

console.log(text + (numUno / numDos));

// 12° Linea:
text = `12. ${numUno} módulo de ${numDos}: `;

console.log(text + (numUno % numDos));

// fin Operadores matematicos:
