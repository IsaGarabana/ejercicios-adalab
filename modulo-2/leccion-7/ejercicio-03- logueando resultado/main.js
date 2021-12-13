"use strict";
// Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.
// NOTA: Este tipo de variables como acc que se va actualizando y al final tiene el resultado de varias operaciones se llama acumulador. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga.

for (let acc = 0; acc < 20; acc = acc + 2) {
	console.log(`el resultado es: ${acc}`);
}

// En este no tengo muy claro si hay una manera de hacer que repita 10 veces sin yo hacer la matemática. aquí sé que repite 10 veces porque 20/2=10. Qué pasa con cosas más complicadas??

let step = 2;
let spins = 10;

for (let acc = 0; acc < step * spins; acc = acc + step) {
	console.log(`el resultado  es: ${acc}`);
}
