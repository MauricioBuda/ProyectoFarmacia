// Obtener la referencia de la tabla
var tabla = document.getElementById("miTabla");

// Datos para cada celda
var datos = [
    ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
    ["Dato 5", "Dato 6", "Dato 7", "Dato 8"],
    ["Dato 9", "Dato 10", "Dato 11", "Dato 12"],
    ["Dato 13", "Dato 14", "Dato 15", "Dato 16"],
    ["Dato 17", "Dato 18", "Dato 19", "Dato 20"],
    ["Dato 21", "Dato 22", "Dato 23", "Dato 24"],
    ["Dato 25", "Dato 26", "Dato 27", "Dato 28"],
    ["Dato 29", "Dato 30", "Dato 31", "Dato 32"],
    ["Dato 33", "Dato 34", "Dato 35", "Dato 36"],
    ["Dato 37", "Dato 38", "Dato 39", "Dato 40"],
    ["Dato 41", "Dato 42", "Dato 43", "Dato 44"],
    ["Dato 45", "Dato 46", "Dato 47", "Dato 48"],
    ["Dato 49", "Dato 50", "Dato 51", "Dato 52"],
    ["Dato 53", "Dato 54", "Dato 55", "Dato 56"],
    ["Dato 57", "Dato 58", "Dato 59", "Dato 60"],
    ["Dato 61", "Dato 62", "Dato 63", "Dato 64"],
    ["Dato 65", "Dato 66", "Dato 67", "Dato 68"],
    ["Dato 69", "Dato 70", "Dato 71", "Dato 72"],
    ["Dato 73", "Dato 74", "Dato 75", "Dato 76"],
    ["Dato 77", "Dato 78", "Dato 79", "Dato 80"],
    ["Dato 81", "Dato 82", "Dato 83", "Dato 84"],
    ["Dato 85", "Dato 86", "Dato 87", "Dato 88"],
    ["Dato 89", "Dato 90", "Dato 91", "Dato 92"],
    ["Dato 93", "Dato 94", "Dato 95", "Dato 96"],
    ["Dato 97", "Dato 98", "Dato 99", "Dato 100"],
    ["Dato 101", "Dato 102", "Dato 103", "Dato 104"],
    ["Dato 105", "Dato 106", "Dato 107", "Dato 108"],
    ["Dato 109", "Dato 110", "Dato 111", "Dato 112"],
    ["Dato 113", "Dato 114", "Dato 115", "Dato 116"],
    ["Dato 117", "Dato 118", "Dato 119", "Dato 120"],
    ["Dato 121", "Dato 122", "Dato 123", "Dato 124"],
    ["Dato 125", "Dato 126", "Dato 127", "Dato 128"],
    ["Dato 129", "Dato 130", "Dato 131", "Dato 132"],
    ["Dato 133", "Dato 134", "Dato 135", "Dato 136"],
    ["Dato 137", "Dato 138", "Dato 139", "Dato 140"],
    ["Dato 141", "Dato 142", "Dato 143", "Dato 144"],
    ["Dato 145", "Dato 146", "Dato 147", "Dato 148"],
    ["Dato 149", "Dato 150", "Dato 151", "Dato 152"],
    ["Dato 153", "Dato 154", "Dato 155", "Dato 156"],
    ["Dato 157", "Dato 158", "Dato 159", "Dato 160"],
    ["Dato 161", "Dato 162", "Dato 163", "Dato 164"],
    ["Dato 165", "Dato 166", "Dato 167", "Dato 168"],
    ["Dato 169", "Dato 170", "Dato 171", "Dato 172"],
    ["Dato 173", "Dato 174", "Dato 175", "Dato 176"],
    ["Dato 177", "Dato 178", "Dato 179", "Dato 180"],
    ["Dato 181", "Dato 182", "Dato 183", "Dato 184"],
    ["Dato 185", "Dato 186", "Dato 187", "Dato 188"],
    ["Dato 189", "Dato 190", "Dato 191", "Dato 192"],
    ["Dato 193", "Dato 194", "Dato 195", "Dato 196"],
    ["Dato 197", "Dato 198", "Dato 199", "Dato 200"],
];

// Generar filas y celdas con JavaScript
for (var i = 0; i < datos.length; i++) {
    var fila = tabla.insertRow(-1);

    for (var j = 0; j < 5; j++) {
        var celda = fila.insertCell(-1);

        if (j === 0) {
            // Para la primera columna (OBRA SOCIAL)
            celda.innerHTML = "Obra social " + (i + 1);
        } else {
            // Para las demás columnas, mostrar el dato correspondiente
            celda.innerHTML = datos[i][j - 1];
        }
    }
}