"use strict";
// Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicio 5).

// EJERCICIO PARES O NONES
function pares(a) {
	if (a % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// FUNCIÓN GETEL
function getEl(selector) {
	const element = document.querySelector(selector);
	if (element === null) {
		console.error(
			`No existe ningún elemento con clase, id o tag llamado ${selector}`
		);
	} else {
		return element;
	}
}

// Sin modificar estas dos funciones, vamos a hacer lo siguiente:
// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)

function getEl(selector) {
	const element = document.querySelector(selector);
	if (element === null) {
		console.error(
			`No existe ningún elemento con clase, id o tag llamado ${selector}`
		);
	} else {
		return element;
	}
}

// convertimos ese valor a número y lo asignamos a una constante

const numberToUse = getEl(".paragraph").innerHTML;
const finalNumber = parseInt(numberToUse);

// usamos nuestra función del ejercicio 4 para saber si es par o impar

function pares(a) {
	if (a % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
const finalResult = pares(finalNumber);

// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'
if (finalResult === false) {
	console.log(`${finalNumber} es un número impar`);
} else {
	console.log(`${finalNumber} es un número par`);
}
