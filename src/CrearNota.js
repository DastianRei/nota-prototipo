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
        delete(notas[i]);
    }
  }
}
export { CrearNota, GuardarNotas, BuscarNota, EliminarNota};
