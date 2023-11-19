document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia de la tabla
    var tabla = document.getElementById("miTabla");

    // Generar filas y celdas con JavaScript
    for (var i = 0; i < datos.length; i++) {
    var fila = tabla.insertRow(-1);

    // Columna 1 (Obra Social)
    var celdaObraSocial = fila.insertCell(0);
    var enlaceObraSocial = document.createElement("a");
    enlaceObraSocial.href = datos[i].obraSocial.href;
    enlaceObraSocial.textContent = datos[i].obraSocial.nombre;
    enlaceObraSocial.target = "_blank"; // Abrir en nueva pestaña
    celdaObraSocial.appendChild(enlaceObraSocial);

      // Columnas 2 a 5
    for (var j = 1; j <= 4; j++) {
        var celda = fila.insertCell(j);
        celda.innerHTML = datos[i][Object.keys(datos[i])[j]];
    }
    }
});