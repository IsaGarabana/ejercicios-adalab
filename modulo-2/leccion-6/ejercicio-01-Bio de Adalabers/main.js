"use strict";

// Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz

const adalaber = {
	name: "Susana",
	age: 34,
	job: "periodista",
};

const adalaber2 = {
	name: "Rocío",
	age: 25,
	job: "actriz",
};

const name1 = document.querySelector("h1");
const name2 = document.querySelector("h2");

function showName() {
	name1.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}`;
	name2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
}

showName();
