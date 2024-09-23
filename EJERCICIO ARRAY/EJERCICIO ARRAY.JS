//DISEÑAR UN ARRAY CON TEMA LIBRE APLICANDO TODO LO QUE HEMOS VISTO HASTA EL MOMENTO, CON COMENTARIOS

let sins = ["IRA", "AVARICIA", "ENVIDIA", "LUJURIA", "PEREZA", "SOBERBIA", "GULA"] //Definimos con un let la variable (sins) 
//y dentro definimos 7 datos o elementos

alert( sins[0] ); // ira
alert( sins[1] ); // avaricia
alert( sins[2] ); // envidia
alert( sins[3] ); // lujuria
alert( sins[4] ); // pereza
alert( sins[5] ); // soberbia
alert( sins[6] ); // gula

//mediante alerts mostramos todos los elementos en orden

let cuantos = prompt("cantidad de pecados capitales que se mostraron"); //definimos (cuantos) y un prompt para pedirle al usuario un valor
let operacion = Number(cuantos); //definimos (operacion) 

if (operacion === 7) {
    alert("efectivamente son 7");
} else if (operacion > 7) {
    alert("ERRONEO");
} else if (operacion < 7) {
    alert("ERRONEO");
} else {
    alert("WTF como llegaste aquí ?????");
}



