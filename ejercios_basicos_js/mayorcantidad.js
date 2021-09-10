var cantidad=[];
var c1 = parseInt(prompt('introduce la primera cantidad'));
cantidad.push(c1);
var c2 = parseInt(prompt('introduce la segunda cantidad'));
cantidad.push(c2);
var c3 = parseInt(prompt('introduce la tercera cantidad'));
cantidad.push(c3)
cantidad.sort(function(a,b){return a - b});
cantidad.reverse();
document.write('la cantidad mayor es:', cantidad[0]);
