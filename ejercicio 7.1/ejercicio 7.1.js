

let day = prompt("Por favor digite un número según el día de la semana (1|2|3|4|5|6|7)");
day = Number(day); // Convertir a número

switch (day) {
    case 1:
        alert('¡El Día de hoy es LUNES!');
        break;
    case 2:
        alert('¡El Día de hoy es MARTES!');
        break;
    case 3:
        alert('¡El Día de hoy es MIÉRCOLES!');
        break;
    case 4:
        alert('¡El Día de hoy es JUEVES!');
        break;
    case 5:
        alert('¡El Día de hoy es VIERNES!');
        break;
    case 6:
        alert('¡El Día de hoy es SÁBADO!');
        break;
    case 7:
        alert('¡El Día de hoy es DOMINGO!');
        break;
    default:
        alert("Los días de la semana son solo 7. Intenta otra vez.");
}
