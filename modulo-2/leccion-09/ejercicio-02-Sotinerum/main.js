"use strict";
// Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

function get100Numbers() {
	const unoACien = [];
	for (let i = 1; i <= 100; i++) {
		unoACien.push(i);
	}
	return unoACien;
}

// const ordenados = get100Numbers();

// for (const unoauno of ordenados) {
// 	console.log(unoauno);
// }

//del revés

function getReversed100Numbers() {
	const delreves = get100Numbers().reverse();
	return delreves;
}

const desordenados = getReversed100Numbers();

for (const unoauno of desordenados) {
	console.log(unoauno);
}
