"use strict";

const tasks = [
	{ name: "Recoger setas en el campo", completed: true },
	{ name: "Comprar pilas", completed: true },
	{ name: "Poner una lavadora de blancos", completed: true },
	{
		name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
		completed: false,
	},
];

const main = document.querySelector(".js_list");

for (let index = 0; index < tasks.length; index++) {
	if (tasks.completed === true) {
		main.innerHTML += `<li class="completed"><input class="checkbox"  id=${index} type="checkbox" name="checkbox" checked
		/> ${tasks[index].name}  </li>`;
	} else {
		main.innerHTML += `<li class=""><input class="checkbox" id=${index} type="checkbox" name="checkbox"
		/> ${tasks[index].name}  </li>`;
	}
}

// for (const data of tasks) {
// 	if (data.completed === true) {
// 		main.innerHTML += `<li class="completed"><input class="checkbox"   type="checkbox" name="checkbox" checked
// 		/> ${data.name}  </li>`;
// 	} else {
// 		main.innerHTML += `<li class=""><input class="checkbox" type="checkbox" name="checkbox"
// 		/> ${data.name}  </li>`;
// 	}
// }

const checkbox = document.querySelectorAll(".checkbox");

// FUNCION HANDLE DEL TICK EN EL CHECKBOX (SE APLICA LA CLASE A )
function handleClickOnCheckbox(event) {
	if (event.currentTarget.checked === true) {
		event.currentTarget.parentNode.classList.add("completed");
	} else {
		event.currentTarget.parentNode.classList.remove("completed");
	}
}

//FUNCION LISTENER (2 OPCIONES)

// for (let index = 0; index < checkbox.length; index++) {
// 	checkbox[index].addEventListener("click", handleClickOnCheckbox);
// }

for (const eachCheckBox of checkbox) {
	eachCheckBox.addEventListener("click", handleClickOnCheckbox);
}
