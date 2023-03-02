function CrearNota(titulo, texto) {
  return {
    titulo: titulo,
    texto: texto,
    fecha: new Date(),
  };
}
function BuscarNota(titulo, notas) {
  for (var i = 0; i < notas.length; i++) {
    var tituloABuscar = notas[i].titulo;
    if (titulo == tituloABuscar) {
      return notas[i];
    }
  }
}
function GuardarNotas(nota) {
  let notas = [];
  notas.push(nota);
}
function EliminarNota(titulo, notas) {
  for (var i = 0; i < notas.length; i++) {
    var tituloABuscar = notas[i].titulo;
    if (titulo == tituloABuscar) {
      delete notas[i];
    }
  }
}
function MostrarNota(nota) {
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
}
export { CrearNota, GuardarNotas, BuscarNota, EliminarNota, MostrarNota };
