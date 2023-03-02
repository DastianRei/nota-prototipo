import { BuscarNota, CrearNota, EliminarNota, MostrarNota } from "./CrearNota";

const tituloABuscar = document.querySelector("#titulo-a-buscar");
const divTituloABuscar = document.querySelector("#nota-buscada");
const formBuscador = document.querySelector("#buscador");
const formCrear = document.querySelector("#crear-notas");
const formEliminar = document.querySelector("#eliminar-nota");
const divTituloNota = document.querySelector("#nota-creada");
let notas = [];
window.onload = function () {
  window.notas = [];
};

formBuscador.addEventListener("submit", (event) => {
  event.preventDefault();
  let nota = BuscarNota(tituloABuscar.value, notas);
  divTituloABuscar.innerHTML = MostrarNota(nota);
});
formEliminar.addEventListener("submit", (event) => {
  event.preventDefault();
  EliminarNota(tituloABuscar.value, notas);
  console.log(notas.length);
});
function AgregarElemento() {
  const tituloNota = document.querySelector("#tituloNota");
  const textoNota = document.querySelector("#texto-nota");
  const nota = CrearNota(tituloNota.value, textoNota.value);
  notas.push(nota);
}
formCrear.addEventListener("submit", (event) => {
  event.preventDefault();
  AgregarElemento()
  var foo = notas.map(function (nota) {
    return MostrarNota(nota);
  });
  divTituloNota.innerHTML = foo;
});
