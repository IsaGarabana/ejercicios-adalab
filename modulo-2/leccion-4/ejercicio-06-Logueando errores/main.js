"use strict";
// Al recoger el elemento de HTML vamos a guardarlo en una constante.
// Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
// Finalmente tras nuestro condicional retornaremos la constante con el elemento.
// Nota: podemos imprimir/loguear errores con console.error().

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

const btnEl = getEl(".btn");
console.log(btnEl);
const menuEl = getEl(".menu");
console.log(menuEl);
const melonEl = getEl(".melon");
console.log(melonEl);

const loloel = getEl("maiw"); // devuelve error de consola
