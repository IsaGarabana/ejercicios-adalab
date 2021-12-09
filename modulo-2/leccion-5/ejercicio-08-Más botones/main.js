"use strict";

// Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que:
// añadir la clase si no la tiene
// quitarla la clase si la tiene
// Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle

const button = document.querySelector(".button");

const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

const changeClass = (event) => {
	const selectedButton = event.currentTarget;
	selectedButton.classList.toggle("prettyButton");
};

button.addEventListener("click", changeClass);

button2.addEventListener("click", changeClass);
button3.addEventListener("click", changeClass);
button4.addEventListener("click", changeClass);
