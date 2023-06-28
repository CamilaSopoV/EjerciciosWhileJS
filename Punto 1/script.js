// Solicitar al usuario un número
var numero = parseInt(prompt("Introduce un número:"));

// Validar que el número sea válido
if (isNaN(numero)) {
    alert("El número introducido no es válido.");
}

else {

    var contador = 1;
    var multiplos = "";

    // Bucle while para obtener los múltiplos de 5

    while (contador <= numero) {
        if (contador % 5 === 0) {
            multiplos += contador +
                ", ";
        }
        contador++;
    }

}
contador++;

// Mostrar los múltiplos de 5 utilizando alert

if (multiplos.length > 0) {

    alert

    alert("Los múltiplos de 5 hasta " + numero + " son: " + multiplos);
}

else {


    alert("No hay múltiplos de 5 hasta " + numero + ".");
}