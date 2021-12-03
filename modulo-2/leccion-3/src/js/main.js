"use strict";

// //Ejemplo Operador igualdad ===

// const currentVegetable = "tomato";
// const isLettuce = currentVegetable === "lettuce"; //sale  False en consola

// const isTomato = currentVegetable === "tomato";

// console.log(isLettuce);

// //Operador desigualdad !== > < => <=

// const result = 5;
// console.log(result !== 4 + 5); // true

// //Operador Negación !
// // const emptyNameField = true;
// // const nameIsFilled = !emptyNameField;

// const nameField = document.querySelector(".input-name").value; //falsy
// const emptyNameField = !nameField; // true
// const nameIsFilled = !emptyNameField; // false

// console.log(emptyNameField);

// // const isModerator = true;
// // const isAdmin = false;
// // const userName = "Layla";

// // const moderatorName = isModerator && userName; // Layla

// // console.log(moderatorName);

// const name1 = "María";
// const age = 35;

// name1 === "María" || age >= 30; // true
// name1 === "Marta" || age >= 30; // true
// name1 === "María" || age >= 40; // true
// name1 === "Marta" || age >= 40; // false

// console.log(name1);

let welcomeMessageElement = document.querySelector(".welcome__text");

const isAdmin = true;
const adminText = isAdmin && "administradora";
const isModerator = true;
const moderatorText = isModerator && "moderadora";

// Como la primera expresión es `falsy`, se devuelve la segunda expresión
welcomeMessageElement = `Bienvenida ${
	adminText || moderatorText
}. ¡Es genial verte de nuevo!`;

console.log(typeof isAdmin);

// const age1 = 35;

// if (age1 > 30) {
// 	console.log("Tienes más de 30 años"); //Esta línea se ejecuta solo si se cumple la condición
// } else {
// 	console.log("Como mucho tienes 30 años"); //Esta línea se ejecuta solo si NO se cumple la condición
// }

const activableSection = document.querySelector(".activable-section");

// Si contiene la clase hidden
if (activableSection.classList.contains("hidden")) {
	// Elimina la clase
	activableSection.classList.remove("hidden");
} else {
	// Si no, en caso contrario
	// Añade la clase hidden
	activableSection.classList.add("hidden");
}
