"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";

// avatar que eligió el usuario al registrarse
let userAvatar = "";

// Añadir la imagen userAvatar a la etiqueta de HTML img

const imagen = document.querySelector(".user__avatar");
imagen.src = userAvatar;

console.log(imagen);

//Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
// si tenemos el avatar del usuario se muestre este.
// si no tenemos datos del avatar del usuario, se muestre el avatar por defecto

imagen.src = userAvatar || DEFAULT_AVATAR;
