//2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
//parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
//Nota: El resultado puede ser mostrado por consola o por html.
var num1 =parseInt(prompt ('ingrese primer numero'));
var num2 =parseInt(prompt ('ingrese segundo numero'));
//suma
function suma(n1,n2){
    var resultado = num1 + num2;
    document.writeln(' la suma es : ', resultado );
}
suma(num1,num2)
//resta
function resta(n1,n2){
var resultado1 = num1 - num2;
document.writeln(' la resta es : ', resultado1);
}
resta(num1,num2)
//multiplicacion
function multiplicar(n1,n2){
    var resultado2 = num1 * num2;
    document.writeln(' la multiplicacion es : ', resultado2);
    }
multiplicar(num1,num2)

//division
function division(n1,n2){
    var resultado3 = num1 / num2;
    document.writeln(' la division es : ', resultado3);
    }
division(num1,num2)