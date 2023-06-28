const palabras = [];
while (true) {
    let entrada = prompt("Ingrese una letra o palabra (para terminar presione enter con la casilla en blanco):");
    if (entrada === "") {
        break;
    }
    palabras.push(entrada);
}

console.log("Palabras capturadas:", palabras);
var palabrasFinal = palabras.join(" ");
console.log("Palabras capturadas:", palabrasFinal);
document.write(palabrasFinal)