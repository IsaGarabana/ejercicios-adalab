"use strict";

//Ejercicio 1

function multiply(a, b) {
	return a * b;
}
console.log(multiply(5, 6));

//Ejercicio 2

function media(a, b, c, d) {
	return (a + b + c + d) / 4;
}
console.log(media(10, 3, 3, 2));

//Ejercicio 3
function ticket(a) {
	const price = a;
	const IVA = a * 0.21;
	const totalPrice = price + IVA;
	return `Precio con IVA = ${price} euros, IVA ${IVA} euros, Total ${totalPrice} euros`;
}

console.log(ticket(10));

// Ejercicio 3 Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1". Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.
function calculateVat(price) {
	const vat = price * 0.21;
	console.log(`Precio sin IVA: ${price}, IVA:${vat} y Total: ${price + vat} `);
	return price + vat;
}
const total = calculateVat(10);
console.log(total);

//Pares o nones
//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecutala e imprime el resultado para comprobar que funciona.

function paresONones(a) {
	if (a % 2 === 0) {
		return "true";
	} else {
		return "false";
	}
}
console.log(paresONones(0));

/*EJERCICIO 8
Vamos a partir de uno de los ejemplos anteriores que usa una variable global, que luego se modifica desde una función.

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

En el ejemplo anterior prueba a cambiar el orden del los console.log. ¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"?*/

let secretLetter = "y";
function mySecretLetter() {
	secretLetter = "x";
	return secretLetter;
}

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

function mySecretLetter2() {
	secretLetter = "y";
	return secretLetter;
}

console.log(secretLetter);
console.log(mySecretLetter2());

// Control de acceso
// En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
// Nota: cambia el valor de la variable y comprueba que todo funciona como esperas.

let myName = "Ángeles";
const message = `Bienvenida, ${myName}`;
console.log(message);
if (myName === "Ángeles") {
  console.log(message);
} else {
  console.log("Lo siento pero el usuario no está registrado");
}
11:30
