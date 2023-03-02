import { BuscarNota, CrearNota } from "./CrearNota";

const tituloABuscar = document.querySelector("#titulo-a-buscar");
const divTituloABuscar = document.querySelector("#nota-buscada");
const formBuscador = document.querySelector("#buscador");
const formCrear = document.querySelector("#crear-notas");

const divTituloNota = document.querySelector("#nota-creada");
let notas = [];
window.onload = function () {
  window.notas = [];
};
formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();
  let nota = BuscarNota(tituloABuscar.value, notas);
  divTituloABuscar.innerHTML =
    "<p> Titulo: " +
    nota.titulo +
    "</p>" +
    "<p> Texto: " +
    nota.texto +
    "</p>" +
    "<p> Fecha: " +
    nota.fecha.getDay() +
    "/" +
    nota.fecha.getMonth() +
    "/" +
    nota.fecha.getFullYear() +
    "</p>" +
    "<br>";
});

formCrear.addEventListener("submit", (event) => {
  const tituloNota = document.querySelector("#tituloNota");
  const textoNota = document.querySelector("#texto-nota");
  const nota = CrearNota(tituloNota.value, textoNota.value);
  event.preventDefault();
  notas.push(nota);
  var foo = notas.map(function (nota) {
    return (
      "<p> Titulo: " +
      nota.titulo +
      "</p>" +
      "<p> Texto: " +
      nota.texto +
      "</p>" +
      "<p> Fecha: " +
      nota.fecha.getDay() +
      "/" +
      nota.fecha.getMonth() +
      "/" +
      nota.fecha.getFullYear() +
      "</p>" +
      "<br>"
    );
  });
  divTituloNota.innerHTML = foo;
});
