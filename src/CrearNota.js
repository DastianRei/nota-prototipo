function CrearNota(titulo, texto) {
  return {
    titulo: titulo,
    texto: texto,
    fecha: new Date(),
  };
}
function GuardarNotas(nota){
    let notas = [];
    notas.push(nota);
}
export {CrearNota,GuardarNotas};
