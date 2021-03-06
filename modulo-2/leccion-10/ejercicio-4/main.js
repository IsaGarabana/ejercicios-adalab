"use strict";
"use strict";

// Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

// Para ello vamos a hacer lo siguiente:
// Preparar un input con un botón para que la usuaria introduzca la organización.
// Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
// Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
// En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).

// FUNCIÓN MANEJADORA

function showReposList(ev) {
	ev.preventDefault();
	const orgName = document.querySelector(".js-input");

	fetch(`https://api.github.com/orgs/${orgName.value}`)
		.then((response) => response.json())
		.then((orgInfo) => {
			const orgRepoInfo = orgInfo.repos_url;
			return fetch(`${orgRepoInfo}`);
		})
		.then((reposResponse) => reposResponse.json())
		.then((orgRepos) => {
			const repoList = document.querySelector(".js-repoList");
			let html = "";
			for (const eachrepo of orgRepos) {
				html += `<li> ${eachrepo.name} </li>`;
			}
			repoList.innerHTML = html;
		});
}
//LISTENER DEL BOTÓN

const button = document.querySelector(".js-button");
button.addEventListener("click", showReposList);
