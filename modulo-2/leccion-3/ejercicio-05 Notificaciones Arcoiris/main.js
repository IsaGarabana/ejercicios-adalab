"use strict";
const title = document.querySelector(."title");
const para = document.querySelector(".paragraph");
const container = document.querySelector(".js-container");

if(container.classList.contains("success")){
	title.innerHTML = "Correcto"
	para.innerHTML = "Los datos son correctos"
}
else if (container.classList.contains("error")){
	title.innerHTML= "ERROR";
	para.innerHTML= "Ha surgido un error"
}
else if (container.classList.contains("warning"))