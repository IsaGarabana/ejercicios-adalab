"use strict";
// Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
// Nota: el objetivo es hacerlo utilizando event.currentTarget

// cogemos el elemento de HTML Input y el del texto
const input = document.querySelector(".input");
const paragraph = document.querySelector(".paragraph");

// Hacemos la función de escritura
// function getText(event) {
// 	paragraph.innerHTML = event.currentTarget.value;
// }

// Escrita en arrow:
const getText = (event) => (paragraph.innerHTML = event.currentTarget.value);
// Y la de listening

input.addEventListener("keypress", getText);
