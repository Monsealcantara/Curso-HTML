//función constructora de la"clase" Círculo
function Circulo(radio){
    this.radio=radio;
}
Circulo.prototype.getArea=              //se usa una funcion constructora,. me permite crear muchos objetos, es generica
    function(){
        return Math.PI*Math.pow(this.radio,2);
    };
/*    
Código inválido
var C0=Circulo(8);
no se puede llamar a esta función ya que no se usó new
console.log(C0.getArea());
*/
var C=new Circulo(10);    
console.log(C.getArea());
var C2=new Circulo(20);
console.log(C2);

var C3 ={               //para hacer otro objeto tendría que copiar de nuevo el código
    radio:10,
    getArea:function () {
        var self=this;
        console.log(this);
        var radio2=function (){
            self.radio=20;          //la función no se ejecuta hasta que no se mande llamar
        }
        radio2();
        console.log(this.radio);

        return Math.PI*Math.pow(this.radio,2);
    }
};

console.log(C3.getArea());