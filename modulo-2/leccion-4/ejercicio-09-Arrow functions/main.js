"use strict";
// Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha. ¡A lo loco!

// function pares(a) {
// 	if (a % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(pares(22));

// ARROW FUNCTION

const paresONones = (a) => {
	if (a % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(paresONones(7));

// function media(a, b, c, d) {
// 	return (a + b + c + d) / 4;
// }
// console.log(media(10, 3, 3, 2));

const findTheMedia = (a, b, c, d) => (a + b + c + d) / 4;
console.log(findTheMedia(10, 2, 40, 5));

// function getEl(selector) {
// 	return document.querySelector(selector);
// }

const getEl = (selector) => document.querySelector(selector);

const btnEl = getEl(".btn");
console.log(btnEl);
const menuEl = getEl(".menu");
console.log(menuEl);
const melonEl = getEl(".melon");
console.log(melonEl);

// function calculateVat(price) {
// 	const vat = price * 0.21;
// 	console.log(`Precio sin IVA: ${price}, IVA:${vat} y Total: ${price + vat} `);
// 	return price + vat;
// }
// const total = calculateVat(3);
// console.log(total);

const calculateVat = (price) => {
	const vat = price * 0.21;
	console.log(`Precio sin IVA: ${price}, IVA:${vat} y Total: ${price + vat} `);
	return price + vat;
};

const total = calculateVat(3);
console.log(total);
