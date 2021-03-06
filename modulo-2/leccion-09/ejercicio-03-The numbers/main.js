"use strict";
// Vamos a crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:
// Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.
// Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
// Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
// Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

const lostNumbers = [4, 8, 15, 16, 23, 42];

// function pairs(numeropar) {
// 	if (numeropar % 2 === 0) {
// 		return numeropar;
// 	}
// }

function bestLostNumber() {
	const pares = lostNumbers.filter((numeropar) => numeropar % 2 === 0);
	const multiploTres = lostNumbers.filter((portres) => portres % 3 === 0);
	const concatenados = pares.concat(multiploTres);

	return concatenados;
}

const concatenados2 = bestLostNumber();

for (const lostitos of concatenados2) {
	console.log(lostitos);
}

// console.log(pares);
// console.log(multiploTres);
// console.log(concatenados);
