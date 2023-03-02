import Nota from "./Nota";

const tituloABuscar = document.querySelector("#titulo-a-buscar");
const divTituloABuscar = document.querySelector("#titulo");
const formBuscador = document.querySelector("#buscador");
const formCrear = document.querySelector("#crear-notas");
const tituloNota = document.querySelector("#tituloNota");
const textoNota = document.querySelector("#texto-nota");
const divTituloNota = document.querySelector("#nota-creada");

formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();
  divTituloABuscar.innerHTML = "<p>" + tituloABuscar.value + "</p>";
});
formCrear.addEventListener("submit", (event) => {
  event.preventDefault();
  const nota = new Nota(tituloNota.value, textoNota.value);
  console.log(nota);
  divTituloNota.innerHTML =
    "<p>" + tituloABuscar.value + textoNota.value  + "</p>";
});
