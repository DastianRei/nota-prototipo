import Nota from "./Nota";

const tituloABuscar = document.querySelector("#titulo-a-buscar");
const divTituloABuscar = document.querySelector("#titulo");
const formBuscador = document.querySelector("#buscador");
const formCrear = document.querySelector("#crear-notas");


formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();
  divTituloABuscar.innerHTML = "<p>" + tituloABuscar.value + "</p>";
});
formCrear.addEventListener("submit", (event) => {
    event.preventDefault();

});
