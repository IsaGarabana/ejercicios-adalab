"use strict";
// Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

const background = document.querySelector(".background");

function SwitchBackgroundColor(event) {
	if (background.classList.contains("colorR")) {
		background.classList.remove("colorR");
	} else if (background.classList.contains("colorM")) {
		background.classList.remove("colorM");
	}

	if (event.key === "r") {
		background.classList.add("colorR");
	} else if (event.key === "m") {
		background.classList.add("colorM");
	}
}

background.addEventListener("keyup", SwitchBackgroundColor);
