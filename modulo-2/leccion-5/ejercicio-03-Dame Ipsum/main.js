"use strict";
//Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");

text.addEventListener("mouseover", () => text2.classList.remove("hidden"));
