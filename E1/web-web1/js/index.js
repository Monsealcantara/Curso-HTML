//usaremos DOM->document object model, lo usamos para unir el html con javascript
(function(){
    console.log("iniciando");       //entre () indicamos que la función se ejecutara sola, cuando se hace eso tenemos que terminar con ();
    const boton1=document.querySelector("#boton1");         //para querySelector se tiene que buscar como id
    boton1.addEventListener("click",function(){
        console.log("botton mostrar");
        const content=document.querySelector("#content");           // puede ser const o variable, es indistinto
        content.innerHTML="<h1 id='texto'>Hola mundo</h1>";
    })
    console.log(boton1);
    const botton3=document.querySelector("#boton3");
    botton3.addEventListener("click",cambiar_color);
})
();

function borrar(){
    console.log("boton borrar");
    const content=document.querySelector("#content");
    content.innerHTML="<h1></h1>";          //para borrar texto se pone la cadena vacía
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto=document.querySelector("#texto");
    if(texto!=null && texto!=undefined){
        texto.setAttribute("style","color:blue");     //con setAtributte se cambian los atributos
    }
}