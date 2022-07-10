let listaYoutubers;

function mostrarDatos() {
  // itero lista de youtubers
  listaYoutubers.forEach((youtuber) => {
    // creo filas (rows) de la tabla
    const tableRow = document.createElement('tr');
    const tableDataNumero = document.createElement('td');
    const tableDataNombre = document.createElement('td');
    const tableDataPais = document.createElement('td');
    const tableDataSuscriptores = document.createElement('td');
    const tableDataCategoria = document.createElement('td');
    const tableDataCalificacion = document.createElement('td');

    // agrego la info del youtuber al; campo de la tabla
    tableDataNumero.innerHTML = youtuber.numero;
    tableDataNombre.innerHTML = youtuber.nombre;
    tableDataPais.innerHTML = youtuber.pais;
    tableDataSuscriptores.innerHTML = youtuber.suscriptores;
    tableDataCategoria.innerHTML = youtuber.categoria;
    tableDataCalificacion.innerHTML = youtuber.calificacion;

    // agrego los campos a la fila
    tableRow.appendChild(tableDataNumero);
    tableRow.appendChild(tableDataNombre);
    tableRow.appendChild(tableDataPais);
    tableRow.appendChild(tableDataSuscriptores);
    tableRow.appendChild(tableDataCategoria);
    tableRow.appendChild(tableDataCalificacion);

    // ubico el selector del tbody
    const tableBody = document.getElementById('id-tbody')

    // agrego la fila a la tabla
    tableBody.appendChild(tableRow);
  })
}

function cargarDatos() {
  fetch('/data/listado.json')
    .then(response => response.json())
    .then((data) => {
      listaYoutubers = data;
      mostrarDatos();
    })
}

// TODO sustituir calificacion numerica por la siguiente fuente (estrellas)
// <i class="fa-solid fa-star"></i>
