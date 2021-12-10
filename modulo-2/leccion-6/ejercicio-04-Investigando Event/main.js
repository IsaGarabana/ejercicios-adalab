"use strict";

const button = document.querySelector(".button");

const changeClass = (event) => {
	const selectedButton = event.currentTarget;
	selectedButton.classList.toggle("prettyButton");
	console.log(event);
};

button.addEventListener("click", changeClass);
