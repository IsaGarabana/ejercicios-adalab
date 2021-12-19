"use strict";

// function getEmoji() {
// 	fetch("https://api.rand.fun/people/firstname")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			document.querySelector(".js-result").innerHTML = data.result;
// 		});
// }

// document.querySelector(".js-emoji").addEventListener("click", getEmoji);

function getEmoji() {
	fetch("https://api.rand.fun/number/integer?min=0&max=25")
		.then((seed) => seed.json())
		.then(
			(randomNumber) =>
				(document.querySelector(".js-result").innerHTML = randomNumber.result)
		);
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);
