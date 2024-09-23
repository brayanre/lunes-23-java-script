//INTERACCIONES


//ALERT
alert("Hello");

//Ya la hemos visto. Muestra un mensaje y espera a que el usuario presione “Aceptar”.


//PROMPT
let resul = prompt ("title", ["default"]);

//title
//El texto a mostrar al usuario.
//default
//Un segundo parámetro opcional, es el valor inicial del campo de entrada.

let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!

//El usuario puede escribir algo en el campo de entrada de solicitud y presionar OK, así obtenemos ese texto en result. O puede cancelar la entrada, con el botón “Cancelar” o presionando la tecla Esc, de este modo se obtiene null en result.
//La llamada a prompt retorna el texto del campo de entrada o null si la entrada fue cancelada.

//Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones OK/CANCELAR.






//CONFIRM

result = confirm(pregunta);

//La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.
//El resultado es true si se pulsa OK y false en caso contrario.

//Por ejemplo:
let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK

//

