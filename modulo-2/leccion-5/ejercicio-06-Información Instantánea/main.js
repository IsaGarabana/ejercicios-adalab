"use strict";
// Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

// const background = document.querySelector(".background");
// debugger;
// function SwitchBackgroundColor() {
// 	if (background.classList.contains("colorR")) {
// 		background.classList.remove("colorR");
// 	} else if (background.classList.contains("colorM")) {
// 		background.classList.remove("colorM");
// 	}

// 	if (Event.key === "r") {
// 		background.classList.add("colorR");
// 	}

// 	if (Event.key === "m") {
// 		background.classList.add("colorR");
// 	}
// }

// background.addEventListener("keydown", SwitchBackgroundColor);

const buttonElement = document.querySelector(".button");

function handleButtonClick(event) {
	console.log(event.currentTarget);
}

buttonElement.addEventListener("click", handleButtonClick);
