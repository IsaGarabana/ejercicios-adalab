"use strict";

// Pares o nones
// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecutala e imprime el resultado para comprobar que funciona.

const add = function (a) {
	if (a % 2 === 0) {
		console.log(a + " es un número par!");
	} else {
		console.log(a + " es Nones!");
	}
};
const result = add(45);

// Otra manera de hacerlo

function pares(a) {
	if (a % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(pares(22));
