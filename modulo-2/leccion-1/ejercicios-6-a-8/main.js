//ejercicio 6

const contentElement = document.querySelector(".content");

const content =
	'<h1>Lorem Ipsum<h1><img src="http://via.placeholder.com/350x150" /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>';

contentElement.innerHTML = content;

//ejercicio 7

const list = document.querySelector(".list");
const listElements = "<li> 1 </li><li> 2 </li><li> 3 </li>";

list.innerHTML = listElements;

//Ejercicio 8

const deactivated = document.querySelector(".js-deactivate");
deactivated.classList.add("deselect");
