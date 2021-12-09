"use strict";
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

const adalaber = {
	name: "Susana",
	age: 34,
	job: "periodista",
	run: () => {
		return "estoy corriendo";
	},
	runAMarathon: (distance) =>
		`${adalaber.run()} un maratón de ${distance} kilómetros`,
	showBio: function () {
		console.log(
			"Mi nombre es " +
				this.name +
				", tengo " +
				this.age +
				" años y soy " +
				this.job +
				"."
		);
	},
};
console.log(adalaber.run());
console.log(adalaber.runAMarathon(50));
console.log(adalaber.showBio());
