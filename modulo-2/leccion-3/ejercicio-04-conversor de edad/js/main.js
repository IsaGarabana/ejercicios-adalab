"use strict";

const dogAge = 16;
let humanAge;

const dog = document.querySelector(".dog");
const human = document.querySelector(".human");

if (dogAge === 0) {
	humanAge = "Acaba de nacer";
} else if (dogAge === 1) {
	humanAge = 15;
} else if (dogAge === 2) {
	humanAge = 15 + 9;
} else if ((dogAge) => 3) {
	humanAge = 15 + 9 + (dogAge - 2) * 5;
} else if (dogAge < 0) {
	humanAge = "no ha nacido aún";
}

dog.innerHTML = dogAge;
human.innerHTML = humanAge;

//SUPER MARA!!!
