//las funciones en javascript son un tipo de objetos
function mul(x,y){
    return x*y;
}
mul.version="v.1.1.0";
console.log(mul.version);

//podemos crear una función que crea FUNCIONES
//Fábrica de funciones
function makeMult(num){             //ESTA FUNCIÓN RETORNA FUNCIONES
    var miFuncion=function(x){
        return num*x;
    }
    return miFuncion;
}

var mul3=makeMult(3);       //el numero dado es el argumento de la función, y esta función simepre multiplicará por tres
console.log(mul3(5));

//LAS FUNCIONES PUEDEN SER ARGUMENTOS DE OTRAS FUNCIONES
/*Funciones como argumentos de otra funciones*/
 function hacerOperacion(x,operacion){
    return operacion(x);
 }

var res=hacerOperacion(5,mul3);
console.log(res);
var duplicar=makeMult(2);

res=hacerOperacion(100,duplicar);
console.log(res);
