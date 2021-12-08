"use strict";

// en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box
// Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

// function boxSize(boxType, boxWidth, padding, border) {
// 	if (boxType === "border-box") {
// 		return `El ancho del contenido es ${
// 			boxWidth - padding * 2 - border * 2
// 		} px y el ancho total de la caja es ${boxWidth} px.`;
// 	} else if (boxType === "content-box") {
// 		return `El ancho del contenido es ${boxWidth} px y el ancho total de la caja es ${
// 			boxWidth + padding * 2 + border * 2
// 		} px.`;
// 	} else {
// 		return "Por favor comprueba que has introducido bien los parámetros";
// 	}
// }

// const myBoxA = boxSize("border-box", 100, 10, 5);
// console.log(myBoxA);
// const myBoxB = boxSize("content-box", 100, 10, 5);
// console.log(myBoxB);
// const myBoxWrong = boxSize("connt-box", 100, 10, 5);
// console.log(myBoxWrong);

//Escrita con Switch

// function boxSize(boxType, boxWidth, padding, border) {
// 	switch (boxType) {
// 		case "border-box":
// 			return `El ancho del contenido es ${
// 				boxWidth - padding * 2 - border * 2
// 			} px y el ancho total de la caja es ${boxWidth} px.`;
// 			break;
// 		case "content-box":
// 			return `El ancho del contenido es ${boxWidth} px y el ancho total de la caja es ${
// 				boxWidth + padding * 2 + border * 2
// 			} px.`;
// 			break;
// 		default:
// 			return "Por favor comprueba que has introducido bien los parámetros";
// 	}
// }

// const myBoxA = boxSize("border-box", 100, 10, 5);
// console.log(myBoxA);
// const myBoxB = boxSize("content-box", 100, 10, 5);
// console.log(myBoxB);
// const myBoxWrong = boxSize("connt-box", 100, 10, 5);
// console.log(myBoxWrong);

// Escrita como arrow

const boxSize = (boxType, boxWidth, padding, border) => {
	if (boxType === "border-box") {
		return `El ancho del contenido es ${
			boxWidth - padding * 2 - border * 2
		} px y el ancho total de la caja es ${boxWidth} px.`;
	} else if (boxType === "content-box") {
		return `El ancho del contenido es ${boxWidth} px y el ancho total de la caja es ${
			boxWidth + padding * 2 + border * 2
		} px.`;
	} else {
		return "Por favor comprueba que has introducido bien los parámetros";
	}
};

const myBoxA = boxSize("border-box", 150, 10, 5);
console.log(myBoxA);
const myBoxB = boxSize("content-box", 100, 10, 5);
console.log(myBoxB);
const myBoxWrong = boxSize("connt-box", 100, 10, 5);
console.log(myBoxWrong);
