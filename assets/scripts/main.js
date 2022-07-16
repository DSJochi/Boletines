let listaYoutubers;

function mostrarDatos(info) {
  const filasYoutubers = [];

  for (let index = 0; index < info.length; index++) {
    const youtuber = info[index];
    const celdasYoutuber = crearCeldasYoutuber(youtuber);
    const filaYoutuber = crearFilaYoutuber(celdasYoutuber);
    filasYoutubers.push(filaYoutuber);
  }

  const tableBody = document.getElementById('id-tbody')
  poblarTabla(tableBody, filasYoutubers);
}

function isDataNew(newData) {
  return listaYoutubers?.length !== newData.length
}

function cargarDatos() {
  fetch('/data/listado.json')
    .then(response => response.json())
    .then((data) => {
      const isNewData = isDataNew(data);
      if (isNewData) {
        listaYoutubers = data;
        mostrarDatos(data);
      }
    })
}

// TODO sustituir calificacion numerica por la siguiente fuente (estrellas)
// <i class="fa-solid fa-star"></i>
