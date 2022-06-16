//Concatenación de cadenas
var str= "hola";
//str += "mundo";
str = str+"mundo";
console.log("¡"+str+"!");

//opradores matematico
console.log((5+4)/2);
console.log(6-2);
console.log(4%2);
console.log(4*1000);
console.log(undefined/5);
function test(a){
    console.log(a/5);
}
//llamada a una funcion con un valor indefinido
test(); //asi no tenga valor va a correr

test(10);

//operadores relacionales

//if
var x=4, y=4;
if (x==y){
    console.log("x=4 es igual a y=4");
}
x="4";
if(x==y){
    console.log("x= '4' es igual a y=4");
}
//estrictamente igual tiene que ser los datos identicos
if(x === y){
    console.log("x= '4' es igual a y=4 estrictamente");
}else{
    console.log("Estrictamente x='4' no es igual a y= 4");
}

x=5;
if(x!=y){
    console.log("x=5 es distinto de y=4");
}
if(x>y){
    console.log("x=5 es mayor a y=4");
}
if(x>=y){
    console.log("x=5 es mayor igual a y=4");
}
x=3;
if(x<=y){
    console.log("x=3 es menor igual  a y=4");
}

//*********************************************************** */
//operadores logicos 
//*********************************************************** */
console.log(true||false);
console.log(true||true);
console.log(false||false);

console.log(true&&false);
console.log(true&&true);
console.log(false&&false);

if(false||null||undefined||""||0||NaN){
    console.log("Este codigo siempre se ejecuta");
}else{
    console.log("Todo es falso");
}

if(true&&"hello"&&1&&-1&&"false"){
    console.log("Todo es verdadero");
}

var sum=0;
for(var i=1; i<=100; i++){
    console.log(i);
    sum +=1; //sum  = sum+1
    sum+=i;
}
console.log("La suma de los primeros 100 números es: "+sum);

sum=0;
i=1;
while(i<=100){
    console.log(i);
    sum+=i;
    i++;
}
console.log("La suma de los primeros 100 números es: "+sum);

