let mensaje;

//Una variable es un “almacén con un nombre” para guardar datos. Podemos usar variables para almacenar golosinas, visitantes, y otros datos.
//Para generar una variable en JavaScript, se usa la palabra clave let.
//La siguiente declaración genera (en otras palabras: declara o define) una variable con el nombre “mensaje”:

let messaje;
messaje = 'Hola'; // almacenar la cadena 'Hola' en la variable llamada messaje

//Ahora podemos introducir datos en ella al utilizar el operador de asignación =

let message;
message = 'Hola!';

alert(message); // muestra el contenido de la variable

//La cadena ahora está almacenada en el área asociada con la variable. y podemos acceder utilizando el nombre de la variable:
//con el uso del alert podermos acceder a la variable y mostrar el contenido de tal

let user = 'John', age = 25, mesage = 'Hola';

//También podemos declarar variables múltiples en una sola línea, 

let usar = 'John';
let aged = 25;
let messuage = 'Hola';
//pero no se recomenda. Por el bien de la legibilidad, mejor utilizar una línea por variable.

let usuario = 'John',
  edad = 25,
  mesusage = 'Hola';

  let userio = 'John'
  , agedi = 25
  , mesasage = 'Hola';

  //Algunas personas también definen variables múltiples en estilo multilínea
  //teniendo en cuenta que al momento de definir otra variable, se coloca una coma (,) de por medio


  var mensasaje = 'Hola';
 // La palabra clave var es casi lo mismo que let. También hace la declaración de una variable, aunque de un modo ligeramente distinto, y más antiguo.

 
 const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!

 //Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:
// Cuando un programador está seguro de que una variable nunca cambiará, puede declarar la variable con const para garantizar y comunicar claramente este hecho a todos.



// NOTA: NO es posible usar el mismo termino para definir diferentes variables