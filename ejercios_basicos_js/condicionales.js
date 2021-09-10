//var edad = prompt('¿Cual es tu edad?');
//if(edad >= 18){
   // console.log('Eres mayor de edad');
   //document.write('Eres mayor de edad');
//} else {
    //console.log('Eres menor de edad');
   //document.write('Eres menor de edad');
//}

/*preguntarle al usuario su edad.Despues de hacer una condicional if con las siguientes situaciones
si el usurio es mayor de 18 y menor de 29 mostrar mensaje
felicidades has sido aceptado en el en el bootcamp de generation, 
en caso contrario mostrar mensaje: No cumples con los requisitos del programa. */
var edad = prompt('¿Cual es tu edad?');
if(edad >=18 && edad <=29 ){
    document.write('Felicidades has sido aceptado en el bootcamp de generation');

}else{
    document.write('No cumples con los requisitos del programa');
}