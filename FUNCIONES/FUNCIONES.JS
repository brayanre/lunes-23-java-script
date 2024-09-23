
//FUNCIONES


//Muy a menudo necesitamos realizar acciones similares en muchos lugares del script.
//Por ejemplo, debemos mostrar un mensaje atractivo cuando un visitante inicia sesión, cierra sesión y tal vez en otros momentos.
//Las funciones son los principales “bloques de construcción” del programa. Permiten que el código se llame muchas veces sin repetición.
//Ya hemos visto ejemplos de funciones integradas, como alert(message), prompt(message, default) y confirm(question). Pero también podemos crear funciones propias.

//EN CONCLUSION: las funciones son bloques de código reutilizables que realizan una tarea específica. Que abarcan diferentes tipos de funciones, cómo se pueden definir y utilizar.


//Para crear una función podemos usar una declaración de función.

function showMessage() {
    alert( '¡Hola a todos!' );
  }

//La palabra clave function va primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis 
//(separados por comas, vacía en el ejemplo anterior) y finalmente el código de la función entre llaves, también llamado “el cuerpo de la función”.

function name(parameter1, parameter2, ... parameterN) {
    // body
   }

//Nuestra nueva función puede ser llamada por su nombre: showMessage().

function showMessage() {
    alert( '¡Hola a todos!' );
  }
  
  showMessage();
  showMessage();

// La llamada showMessage() ejecuta el código de la función. Aquí veremos el mensaje dos veces.
//Este ejemplo demuestra claramente uno de los propósitos principales de las funciones: evitar la duplicación de código…
//Si alguna vez necesitamos cambiar el mensaje o la forma en que se muestra, es suficiente modificar el código en un lugar: la función que lo genera.


// VARIABLES LOCALES : Una variable declarada dentro de una función solo es visible dentro de esa función

function showMessage() {
    let message = "Hola, ¡Soy JavaScript!"; // variable local
  
    alert( message );
  }
  
  showMessage(); // Hola, ¡Soy JavaScript!
  
  alert( message ); // <-- ¡Error! La variable es local para esta función



// VARIABLES EXTERNAS : Una función también puede acceder a una variable externa
//La variable externa solo se usa si no hay una local.

let userName = 'Juan';

function showMessage() {
  let message = 'Hola, ' + userName;
  alert(message);
}

showMessage(); // Hola, Juan


// La función tiene acceso completo a la variable externa. Puede modificarlo también.


let Name = 'Juan';

function showMessage() {
  Name = "Bob"; // (1) Cambió la variable externa

  let message = 'Hola, ' + Name;
  alert(message);
}

alert( Name ); // Juan antes de llamar la función

showMessage();

alert( Name ); // Bob, el valor fué modificado por la función

//


let useName = 'John';

function showMessage() {
  let userName = "Bob"; // declara variable local

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// la función crea y utiliza su propia variable local userName
showMessage();

alert( userName ); // John, se mantiene, la función no accedió a la variable externa

//Si una variable con el mismo nombre se declara dentro de la función, le hace sombra a la externa. 
//Por ejemplo, en el código, la función usa la variable userName local. La exterior se ignora





// PARAMETROS

// Podemos pasar datos arbitrarios a funciones usando parámetros.
//En el siguiente ejemplo, la función tiene dos parámetros: from y text.

function showMessage(from, text) { // parámetros: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', '¡Hola!'); // Ann: ¡Hola! (*)
  showMessage('Ann', "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)

  // Cuando la función se llama (*) y (**), los valores dados se copian en variables locales from y text. Y la función las utiliza.

  function showMessage(from, text) {

    from = '*' + from + '*'; // hace que "from" se vea mejor
  
    alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hola"); // *Ann*: Hola
  
  // el valor de "from" es el mismo, la función modificó una copia local
  alert( from ); // Ann


  //tenemos una variable from y la pasamos a la función. Tenga en cuenta: la función cambia from, pero el cambio no se ve afuera, 
  //porque una función siempre obtiene una copia del valor:



  
// VALORES PREDETERMINADOS

 //Si una función es llamada, pero no se le proporciona un argumento, su valor correspondiente se convierte en undefined.
//Por ejemplo, la función mencionada anteriormente showMessage(from, text) se puede llamar con un solo argumento

showMessage("Ann");

//Eso no es un error. La llamada mostraría "Ann: undefined". Como no se pasa un valor de text, este se vuelve undefined.
//Podemos especificar un valor llamado “predeterminado” o “por defecto” (es el valor que se usa si el argumento fue omitido) en la declaración de función usando (=)

function showMessage(from, text = "sin texto") {
    alert( from + ": " + text );
  }
  
//Ahora, si no se pasa el parámetro text, obtendrá el valor "sin texto"
//El valor predeterminado también se asigna si el parámetro existe pero es estrictamente igual a undefined

  showMessage("Ann"); // Ann: sin texto

//Aquí "sin texto" es un string, pero puede ser una expresión más compleja, la cual solo es evaluada y asignada si el parámetro falta.

function showMessage(from, text = anotherFunction()) {
    // anotherFunction() solo se ejecuta si text no fue asignado
    // su resultado se convierte en el valor de texto
  }





  //PARAMETRO PREDETERMINADOS ALTERNATIVOS

//A veces tiene sentido asignar valores predeterminados a los parámetros más tarde, después de la declaración de función.
//Podemos verificar si un parámetro es pasado durante la ejecución de la función comparándolo con undefined

function showMessage(text) {
    if (text === undefined) { // si falta el parámetro
      text = 'mensaje vacío';
    }
    alert(text);
  }
  showMessage(); // mensaje vacío

 // O podemos usar el operador ||

 function showMessage(text) {
    // si text es indefinida o falsa, la establece a 'vacío'
    text = text || 'vacío';
  }
//--------------------------------------------------------------
  function showCount(count) {
    // si count es undefined o null, muestra "desconocido"
    alert(count ?? "desconocido");
  }
  
  showCount(0); // 0
  showCount(null); // desconocido
  showCount(); // desconocido

//Los intérpretes de JavaScript modernos soportan el operador nullish coalescing ??, 
//que es mejor cuando el valor de 0 debe ser considerado “normal” en lugar de falso


//DEVOLVIENDO UN VALOR

//Una función puede devolver un valor al código de llamada como resultado.

function sum(a, b) {
    return a + b;
  }
  let result = sum(1, 2);
  alert( result ); // 3

//El ejemplo más simple sería una función que suma dos valores

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
  }
  
  let age = prompt('¿Qué edad tienes?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso otorgado' );
  } else {
    alert( 'Acceso denegado' );
  }

// La directiva return puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, 
//la función se detiene y el valor se devuelve al código de llamada (asignado al result anterior).
//Puede haber muchos return en una sola función.

function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
    alert( "Mostrándote la película" ); // (*)
  }

//Es posible utilizar return sin ningún valor. Eso hace que la función salga o termine inmediatamente.
//En el código de arriba, si checkAge(age) devuelve false, entonces showMovie no mostrará la alert.




//NOMENCLATURA DE ELEMENTOS

//Las funciones son acciones. Entonces su nombre suele ser un verbo. Debe ser breve, 
//lo más preciso posible y describir lo que hace la función, 
//para que alguien que lea el código obtenga una indicación de lo que hace la función.
//Es una práctica generalizada comenzar una función con un prefijo verbal que describe vagamente la acción. 
//Debe haber un acuerdo dentro del equipo sobre el significado de los prefijos.
//Por ejemplo, funciones que comienzan con "show" usualmente muestran algo.
//Funciones que comienza con…
//"get…" – devuelven un valor,
//"calc…" – calculan algo,
//"create…" – crean algo,
//"check…" – revisan algo y devuelven un boolean, etc.

ShowMessage(EJEMPLO)     // muestra un mensaje
getAge(EJEMPLO)          // devuelve la edad (la obtiene de alguna manera)
calcSum(EJEMPLO)         // calcula una suma y devuelve el resultado
createForm(EJEMPLO)      // crea un formulario (y usualmente lo devuelve)
checkPermission(EJEMPLO) // revisa permisos, y devuelve true/false




// FUNCIONES == COMENTARIOS

//Las funciones deben ser cortas y hacer exactamente una cosa. Si esa cosa es grande, tal vez valga la pena dividir la función 
//en algunas funciones más pequeñas. A veces, seguir esta regla puede no ser tan fácil, pero definitivamente es algo bueno.
//Una función separada no solo es más fácil de probar y depurar, – ¡su existencia es un gran comentario!
//Por ejemplo, comparemos las dos funciones showPrimes(n) siguientes. Cada una devuelve números primos hasta n.
//La primera variante usa una etiqueta

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // un número primo
    }
  }

//La segunda variante usa una función adicional isPrime(n) para probar la primalidad

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }