"use strict";

//Ejercicio 1

console.log("Hola");
const age = 56;
console.log(age);

const pelota = 2 + 3;
console.log(pelota);

//ejercicio 2

const superWave = document.querySelector(".super-wave");
console.log(superWave);

superWave.classList.add("mega__wave");

//Ejercicio 3

const kiwiPrice = 5;
const peraPrice = 2;
const uvaPrice = 4;

const total = 2 * kiwiPrice + 3 * peraPrice + uvaPrice / 2 + " €";

console.log(total);

//Ejercicio 4

const cenaNavidad = 128;

const todasMenosAna = (cenaNavidad - 2) / 9;
const Ana = todasMenosAna + 2;

console.log("Ana paga " + Ana + "€, y el resto pagan " + todasMenosAna + "€");

//ejercicio 5
const daysInAYear = 365;
const hoursInADay = 24;
const YearsInMyLife = 40;

const hoursLived = YearsInMyLife * hoursInADay * daysInAYear;
console.log(hoursLived);

//ejercicio 6

const name1 = "Isa";
const surname = "Garabana";

console.log("Hola " + name1 + " " + surname);

// Ejercicio 7

console.log(`Hola ${name1} ${surname}, encantada de conocerte`);

//Ejercicio 8
//pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:
const firstDogImage =
	"https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
	"https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
	"https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";
//En este caso para añadir cada uno de los elementos utilizaremos la propiedad innerHTML y la interpolación de cadenas.
const dogList = document.querySelector(".dogList");

const li1 = `
	<li>
		<p>${firstDogName}</p>
		<img src="${firstDogImage}" />
	</li>`;
const li2 = `
	<li>
		<p>${secondDogName}</p>
		<img src="${secondDogImage}" />
	</li>`;
const li3 = `
	<li>
		<p>${thirdDogName}</p>
		<img src="${thirdDogImage}" />
	</li>`;
dogList.innerHTML = li1 + li2 + li3;
