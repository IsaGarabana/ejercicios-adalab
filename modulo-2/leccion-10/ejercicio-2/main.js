"use strict";

function getDogImage() {
	fetch("https://dog.ceo/api/breed/chihuahua/images/random")
		.then((response) => response.json())
		.then((jsonData) => {
			const img = document.querySelector("img");
			img.src = jsonData.message;
			img.alt = "Un perro";
		});
}
const btn = document.querySelectorAll(".js-dog");

for (const button of btn) {
	button.addEventListener("click", getDogImage);
}
