"use strict";

console.log("ready to go");

const userValueSelect = document.querySelector(".js_faceSelect");
const faceSelectH1 = document.querySelector(".js_face");
const button = document.querySelector(".js_button");
const background = document.querySelector(".main");

//Función que recoge el valor del título
function renderFace(face) {
	faceSelectH1.innerHTML = face;
}

//Función que pinta el título dependiendo del value de select
function paintFace() {
	if (userValueSelect.value === "happy") {
		renderFace(":o)");
	} else if (userValueSelect.value === "sad") {
		renderFace(":o(");
	}
}

// función que genera un número random
function getRandom(max) {
	return Math.ceil(Math.random() * max);
}

function changeBackground(randomNum) {
	randomNum = getRandom(100);
	if (randomNum % 2 === 0) {
		background.classList.remove("orange");
		background.classList.add("yellow");
	} else {
		background.classList.remove("yellow");
		background.classList.add("orange");
	}
}

function handleButtonClick(event) {
	event.preventDefault();
	paintFace();
	changeBackground();
}

button.addEventListener("click", handleButtonClick);
