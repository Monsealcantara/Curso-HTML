//creracion de objetos
var empresa=new Object();

empresa.nombre="facebook";      //le aagrego un atributo a mi objeto

empresa.ceo=new Object();            //puedo crear nuevos objetos de un objeto
empresa.ceo.nombre="monse alcantara";
empresa.ceo.apellido="correa";

console.log(empresa);
console.table(empresa);

console.log(empresa.ceo.nombre);
console.log(empresa["nombre"]);

//primer forma de declarar un objeto
var attr="No usuarios";         //se agregó un atributo
empresa[attr]=11000;             //llave->empresa y valor->attr  esto es la declaración de un diccionario si fuera python
 console.log(empresa[attr]);
 console.log(empresa["No usuarios"]);            //pueden ser de una o más palabras
//segunda form de declarar un objeto, se parece a los archivos json
 var facebook={
    nombre:"Facebook",
    ceo:{
        nombre:"monse",
        apellido:"Alcántara"
    },
    "No usuario":100000000000
 };
 console.log(facebook);