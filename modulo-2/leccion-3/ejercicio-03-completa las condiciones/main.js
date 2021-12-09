"use strict";

let myNumber = 25;
const text = document.querySelector(".exercise");

if (myNumber === 0) {
	text.innerHTML = "el número es 0";
} else if (myNumber < 0) {
	text.innerHTML = "El número es negativo";
} else if (myNumber + 2 > 13 && myNumber + 2 <= 20) {
	text.innerHTML = "El número más 2 es mayor que 13 pero menor o igual que 20";
} else if (myNumber > 20 && myNumber < 50) {
	text.innerHTML = "El número es mayor que 20 pero menor que 50";
} else {
	text.innerHTML = "el número no es 123123125";
}
