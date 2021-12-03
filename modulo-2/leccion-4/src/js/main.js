"use strict";

// //Ejercicio 1

// function multiply(a, b) {
// 	return a * b;
// }
// console.log(multiply(4, 6));

// //Ejercicio 2

// function media(a, b, c, d) {
// 	return (a + b + c + d) / 4;
// }
// console.log(media(10, 3, 3, 2));

//Ejercicio 3
function ticket(a) {
	const price = a;
	const IVA = a * 0.21;
	const totalPrice = price + IVA;
	return `Precio con IVA = ${price} euros, IVA ${IVA} euros, Total ${totalPrice} euros`;
}

console.log(ticket(10));
