var str="hola";
//str+="mundo"
str=str+"mundo";
console.log("¡"+str+"!");
//operadores matemáticos
console.
console.log ((5+4)/2);
console.log(6-2);
console.log(4%2);
console.log(4*1000);
console.log(undefined/5)            //undefined, es valor indefinido

test();   //toma pasa el valor de indefinido

function test(a){

}

test();             //si no paso valores, se toman como indefinidos
test(10);

//operadores relacionales

var x=4, y=4;
 if(x==y){
    console.log("x=4 es igual a y=4");
 }
 x="4";
 if(x==y){
    
 }



 /*-********************
 operadores lógicos
 ***********************/
console.log(true||false);
console.log(true||true);
console.log(false||false);


console.log(true&&false);
console.log(true&&true);
console.log(false&&false);

if(false||null||undefined||""||0||NaN){
    console.log("este codigo siempre se ejecutara");
}else{
    console.log("todo es falso");
}

if(true&&"hello"&&1&&-1&&"false"){
    console.log("todo es verdadero");
}


var sum=0;
for(var i=1;i<=100;i++){
    console.log(i);
    sum+=i; //sum=sum+i
}
console.log("la suma de los primeros 100 números es"+sum);

suma=0;
while(suma<=100){
    console.log(i);
    suma+=i;
}
console.log("la suma de los primeros 100 números es"+sum);

