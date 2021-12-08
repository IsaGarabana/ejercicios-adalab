"use strict";
// Scroll es de colores
// Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
// Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
// Preparar classes para cambiar el color de fondo del div.
// Escuchar el evento scroll sobre la ventana window.
// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
// Nota: window.scrollY nos devuelve la posición del scroll vertical.

function scrollColor() {
	const backgroundColor = document.querySelector(".js_background");
	const scroll = window.scrollY;

	if (backgroundColor.classList.contains("pink")) {
		backgroundColor.classList.remove("pink");
	}

	if (backgroundColor.classList.contains("green")) {
		backgroundColor.classList.remove("green");
	}
	if (scroll >= 0 && scroll < 250) {
		backgroundColor.classList.add("pink");
	} else if (scroll >= 250) {
		backgroundColor.classList.add("green");
	}
}

window.addEventListener("scroll", scrollColor);
