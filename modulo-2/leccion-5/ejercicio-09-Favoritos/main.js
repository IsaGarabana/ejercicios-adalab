"use strict";
// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
// Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
// Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
// Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
// Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().

// traer elementos HTML

const teacher1 = document.querySelector(".teacher--isra");
const teacher2 = document.querySelector(".teacher--tuerto");
const teacher3 = document.querySelector(".teacher--nasi");

// Funciones

function addSelectedClass(event) {
	const selectedcard = event.currentTarget;
	selectedcard.classList.toggle("teacher--selected");
}

function switchSpan(event) {
	const selectedcard = event.currentTarget;
	const span = selectedcard.querySelector(".favorite");

	if (selectedcard.classList.contains("teacher--selected")) {
		span.innerHTML = "Quitar";
	} else {
		span.innerHTML = "Añadir";
	}
}

function pepino(event) {
	switchSpan(event);
	addSelectedClass(event);
}

// Operaciones
teacher1.addEventListener("click", pepino);
teacher2.addEventListener("click", pepino);
teacher3.addEventListener("click", pepino);

// teacher1.addEventListener("click", switchSpan);
// teacher2.addEventListener("click", switchSpan);
// teacher3.addEventListener("click", switchSpan);
