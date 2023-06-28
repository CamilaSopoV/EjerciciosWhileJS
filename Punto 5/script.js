while (true) {
    let dia = prompt("Escribe ¿Qué día es hoy? :");

    if (dia.toLowerCase() === "domingo") {
        alert("Viene bien recargar energía");
    }

    else if (dia.toLowerCase() === "lunes") {
        alert("¡Feliz inicio de semana! Recuerda organizar tus actividades");
        break;
    }
    else if (dia.toLowerCase() === "martes") {
        alert("Alimentarse bien, hacer ejericio y descansar lo necesario, te brindará más energía en la semana");
        break;
    }
    else if (dia.toLowerCase() === "miercoles") {
        alert("Bendecida mitad de semana ¡Lo estas haciendo muy bien!");
        break;
    }
    else if (dia.toLowerCase() === "jueves") {
        alert("¿Qué tal va la semana? Espero que bien porque ya es Juernes");
        break;
    }
    else if (dia.toLowerCase() === "viernes") {
        alert("¡Felicitate porque durante la semana hiciste un gran trabajo!");
        break;
    }
    else if (dia.toLowerCase() === "sabado") {
        alert("¡Hoy cuida de ti, hay muchas maneras y planes que puedes hacer!");
        break;
    }
    else {
        alert("Día no reconocido. Por favor, introduce un día válido.");
        break;
    }

}