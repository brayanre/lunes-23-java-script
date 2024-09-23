//ToString
let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string

//el método toString se utiliza para convertir un objeto a su representación en forma de cadena (string). Este método está disponible en casi todos los tipos de datos y objetos.
//La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.
//Por ejemplo, alert(value) lo hace para mostrar el valor como texto.
//También podemos llamar a la función String(value) para convertir un valor a string


//ToNumber
alert( "6" / "2" ); // 3, los strings son convertidos a números

//es una función que se utiliza para convertir un valor a un número. Puede convertir diferentes tipos de datos, como cadenas, booleanos y otros tipos numéricos.
//La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.
//Por ejemplo, cuando se dividen valores no numéricos usando (/)

let str = "123";
alert(typeof str); // string

let num = Number(str); // se convierte en 123

alert(typeof num); // number

//Podemos usar la función Number(value) para convertir de forma explícita un valor a un número
//La conversión explícita es requerida usualmente cuando leemos un valor desde una fuente basada en texto, como lo son los campos de texto en los formularios, pero que esperamos que contengan un valor numérico.
//Si el string no es un número válido, el resultado de la conversión será NaN. Por ejemplo:

let age = Number("un texto arbitrario en vez de un número");

alert(age); // NaN, conversión fallida





//ToBoolean
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hola") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // sólo espacios, también true (cualquier string no vacío es true)

//la conversión a booleano se refiere a transformar un valor en true o false. Esto es útil cuando se evalúan condiciones, como en estructuras de control (if, while, etc.). 
//Hay varias maneras en que JavaScript convierte valores a booleanos.
//Ocurre en operaciones lógicas pero también puede realizarse de forma explícita llamando a la función Boolean(value).
//Las reglas de conversión:
//Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false.
//Otros valores se convierten en true.
