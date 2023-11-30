// 1. Imprime los números del 1 al 5
for (let index = 1; index <= 5; index++) {
  let element = index;
  console.log(element);
}
console.log("------------------");

// 2. Recorre una lista de colores
const lista = ["rojo", "verde", "azul", "amarillo"];

for (const iterator of lista) {
  console.log(iterator);
}
console.log("------------------");

//  3. Recorre las propiedades de un objeto persona
let persona = { nombre: "María", edad: "27", profesion: "diseñadora" };
for (const key in persona) {
  console.log(key + ": " + persona[key]);
}
console.log("------------------");

// 4. Encuentra el número más cercano al cuadrado de 100
let num = 1;
while (num * num < 100) {
  num++;
}
console.log(
  "El número más cercano a 100 cuyo cuadrado es menor que 100 es:",
  num
);
console.log("------------------");

// 5. Imprime los números pares hasta el 10, imprimiendo al menos uno.
for (let index = 1; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
