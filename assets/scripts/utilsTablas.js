// archivo con funciones utiles para tablas usadas en el main

function crearFila() {
  return document.createElement('tr');
}

function crearCelda() {
  return document.createElement('td');
}

function escribirInfoEnCelda(celda, info) {
  celda.innerText = info;
  return celda;
}

function agregarCeldaAFila(fila, campo) {
  return fila.appendChild(campo);
}

function agregarFilaATabla(tabla, fila) {
  return tabla.appendChild(fila);
}
