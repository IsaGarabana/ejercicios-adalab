"use strict";

// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

function ticket(a) {
	const price = a;
	const IVA = a * 0.21;
	const totalPrice = price + IVA;
	return `Precio con IVA = ${price} euros, IVA ${IVA} euros, Total ${totalPrice} euros`;
}

let price2 = ticket(3);
console.log(price2);

//OTRA MANERA DE HACERLO
function calculateVat(price) {
	const vat = price * 0.21;
	console.log(`Precio sin IVA: ${price}, IVA:${vat} y Total: ${price + vat} `);
	return price + vat;
}
const total = calculateVat(3);
console.log(total);
