// archivo con funciones utiles para tablas de youtubers usadas en el main

function crearCeldasYoutuber(youtuber) {
  let celdas = [];

  // youtuber es un objeto no un vector (array)
  // por lo que no se puede iterar con for o forEach
  // lo que hacemos con la funcion `entries` de `Object`
  // es convertir los atributos del objeto en un vector
  const listaParamsYoutuber = Object.entries(youtuber);
  listaParamsYoutuber.forEach(([_key, value]) => {
    // listaParamsYoutuber.forEach((elemento) => {
    const celda = crearCelda();
    const celdaEscrita = escribirInfoEnCelda(celda, value);
    celdas.push(celdaEscrita)
  });

  return celdas;
}

function poblarFila(fila, celdas) {
  for (let i = 0; i < celdas.length; i++) {
    const celda = celdas[i]
    agregarCeldaAFila(fila, celda)
  }
  return fila;
}

function crearFilaYoutuber(celdasDeUnYoutuber){
  const fila = crearFila();
  const filaPoblada = poblarFila(fila, celdasDeUnYoutuber);
  return filaPoblada;
}

function poblarTabla(tabla, filas) {
  for (let i = 0; i < filas.length; i++) {
    const fila = filas[i]
    agregarFilaATabla(tabla, fila)
  }

  return tabla;
}
