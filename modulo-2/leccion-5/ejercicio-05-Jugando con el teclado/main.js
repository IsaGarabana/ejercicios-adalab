"use strict";
// Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

const background = document.querySelector(".background");
const eventKey = "event.key";

function SwitchBackgroundColor() {
	if (background.classList.contains("colorR")) {
		background.classList.remove("colorR");
	} else if (background.classList.contains("colorM")) {
		background.classList.remove("colorM");
	}

	if (eventKey === "r") {
		background.classList.add("colorR");
	}

	if (eventKey === "m") {
		background.classList.add("colorR");
	}
}

background.addEventListener("keydown", SwitchBackgroundColor);
