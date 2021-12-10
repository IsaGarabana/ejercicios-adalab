"use strict";
// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:
// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.
// elemento de HTML
const button = document.querySelector(".button");
const listHTML = document.querySelector(".listContainer");
// listado pelis
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";
// handlers
function printMovieList() {
  listHTML.innerHTML = `<ul>
 <li class= "listItem1">${inception}</li>
 <li class= "listItem2">${theButterFlyEffect}</li>
 <li class= "listItem3">${eternalSunshineOfTheSM}</li>
 <li class= "listItem4">${blueVelvet}</li>
 <li class= "listItem5">${split}</li>
 </ul>`;
}
// del elemento div que ha sido clickado, devuelve por consola solo en que ha sido pinchado
function consoleMovie(event) {
  console.log(event.target.innerHTML);
}
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", printMovieList);
listHTML.addEventListener("click", consoleMovie);