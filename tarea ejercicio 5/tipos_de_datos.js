//Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.
//Hay ocho tipos de datos básicos en JavaScript


//NUMBER
let n = 123;
n = 12.345;
//Hay muchas operaciones para números. Por ejemplo, multiplicación *, división /, suma +, resta -, y demás.


alert( 1 / 0 ); // Infinity
//Además de los números comunes, existen los llamados “valores numéricos especiales” que también pertenecen a este tipo de datos: Infinity, -Infinity y NaN.
//Infinity representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número.
//Podemos obtenerlo como resultado de la división por cero


alert( Infinity ); // Infinity
//O simplemente hacer referencia a él directamente:


alert( "no es un número" / 2 ); // NaN, tal división es errónea
//NaN representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
//NaN es “pegajoso”. Cualquier otra operación sobre NaN devuelve NaN
//Por lo tanto, si hay un NaN en alguna parte de una expresión matemática, se propaga a todo el resultado (con una única excepción: NaN ** 0 es 1).






//BigInt

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
//A diferencia de Number, que es un número de 64 bits, BigInt puede manejar enteros de tamaño arbitrario. Esto significa que puedes trabajar con números mucho más grandes.
//Para ser realmente precisos, el tipo de dato “number” puede almacenar enteros muy grandes (hasta 1.7976931348623157 * 10308), 
//pero fuera del rango de enteros seguros ±(253-1) habrá un error de precisión, porque no todos los dígitos caben en el almacén fijo de 64-bit. Así que es posible que se almacene un valor “aproximado”.

const bigInt = 1234567890123456789012345678901234567890n;
//Un valor BigInt se crea agregando (n) al final de un entero





//STRING
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

//Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.
//En JavaScript, hay 3 tipos de comillas.
//Comillas dobles: "Hola".
//Comillas simples: 'Hola'.
//Backticks (comillas invertidas): `Hola`.

let name = "John";

// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3

//Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.
//Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en ${...}
//La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como name, una expresión aritmética como 1 + 2, o algo más complejo.





//BOOLEAN (tipo lógico)
let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado

//El tipo boolean tiene sólo dos valores posibles: true y false.
//Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.


let isGreater = 4 > 1;
alert( isGreater ); // verdadero (el resultado de la comparación es "sí")

//Los valores booleanos también son el resultado de comparaciones





//El valor “NULL” (nulo)

