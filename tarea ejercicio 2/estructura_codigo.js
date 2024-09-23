alert('Hola'); alert('Mundo');

// Las sentencias son construcciones sintácticas y comandos que realizan acciones.
//es posible separar las sentencias en mas de un alert  Podemos tener tantas sentencias en nuestro código como queramos, las cuales se pueden separar con un punto y coma.

alert('Hola');
alert('Mundo');
// las sentencias se escriben en líneas separadas para hacer que el código sea más legible:

alert('Hola')
alert('Mundo')
//Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea.

alert(3 +
    1
    + 2);
//Hay casos en que una nueva línea no significa un punto y coma. y java lo interpreta como una misma linea de codigo ya que al existir un signo java automaticamente sabe que la linea esta incompleta

alert("Hello");
[1, 2].forEach(alert);
//hay situaciones en las que JavaScript “falla” al asumir un punto y coma donde realmente se necesita.
//Los errores que ocurren en tales casos son bastante difíciles de encontrar y corregir.  un ejemplo concreto de tal error es el anterior
//No es necesario pensar en el significado de los corchetes [] y forEach todavía, solo recuerdemos el resultado del código: muestra Hello, luego 1, luego 2.

alert("Hello")
[1, 2].forEach(alert);
// Quitamos el punto y coma del alert: Esta vez, si ejecutamos el código, solo se ve el primer Hello (y un error pero necesitas abrir la consola para verlo). Los números no aparecen más.
// Esto ocurre porque JavaScript no asume un punto y coma antes de los corchetes [...], entonces el código del primer ejemplo se trata como una sola sentencia.


// LOS COMENTARIOS

//A medida que pasa el tiempo, los programas se vuelven cada vez más complejos. Se hace necesario agregar comentarios que describan lo que hace el código y por qué.
//Los comentarios se pueden poner en cualquier lugar de un script. No afectan su ejecución porque el motor simplemente los ignora.
//Los comentarios de una línea comienzan con dos caracteres de barra diagonal //


