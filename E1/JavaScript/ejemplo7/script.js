//arreglos , tipo especial de objetos-> no son tipos de datos nativos, son datos compuestos
var array=new Array();              ///un arreglo guarda cualquier dato, y los tipos de datos pueden ser combinados dentro del arreglo
array[0]="cadena";
array[1]=2;
array[2]=3.52;
array[3]= function(nombre){
    console.log("Hola"+nombre);
}
array[4]={curso:"HTML,CSS y javascript"};

console.log(array);
console.log(array[4].curso);

//creación de un arreglo asignando valores
var nombres=["Ricardo","Carlos","Stephan","Emmanuel"];
console.log(nombres);
//si imprime llaves es un objeto

for(var i=0;i<nombres.length;i++){          //
    console.log("Hola"+nombres[i]);
}

nombres[100]="Juan";
for(var i=0;i<nombres.length;i++){
    console.log("Hola"+nombres[i]);
}

var miObj={         //esta es la declaraciónnde una variable a la que se le asigna un objeto
    nombre:"monse",
    curso:"html,css,javascript",
    unidad:"multimedia"
};

for(var prop in miObj){
    console.log(prop+":"+miObj[prop]);
}
for(var nombre in nombres){
    console.log("hola"+":"+ nombres[nombre]);
}