
let num1 = prompt("Por favor, digite un número");
let num2 = prompt("Por favor, digite otro número");
let sign = prompt("Seleccione la operación (1 suma | 2 resta | 3 división | 4 multiplicación)");

num1 = Number(num1); 
num2 = Number(num2);
let operacion = Number(sign); 

switch (operacion) {
    case 1:
        alert(`El resultado de la suma es: ${num1 + num2}`);
        break;
    case 2:
        alert(`El resultado de la resta es: ${num1 - num2}`);
        break;
    case 3:
        alert(`El resultado de la división es: ${num1 / num2}`);
        break;
    case 4:
        alert(`El resultado de la multiplicación es: ${num1 * num2}`);
        break;
    default:
        alert("Ninguna de las operaciones ha sido seleccionada.");
}



