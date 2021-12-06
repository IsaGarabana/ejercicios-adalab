"use strict";

const YearsInMyLife = document.querySelector(".js-myAge");

const daysInAYear = 365;
const hoursInADay = 24;

const hoursLived =
	parseInt(YearsInMyLife.innerHTML) * hoursInADay * daysInAYear;

console.log(hoursLived);
