var msg= "en Global"
console.log("GLOBAL: mensaje="+msg);
//
/*   */
var a= function(){
    var msg= "en a";
    console.log("a: mensaje = "+msg);

    function b( ){
        console.log("b: mensaje= "+msg);
    }
    b();        //funcion global
}

a();            //funcion local