//usaremos DOM->document object model, lo usamos para unir el html con javascript
(function(){
    console.log("iniciando");       //entre () indicamos que la función se ejecutara sola, cuando se hace eso tenemos que terminar con ();
    const boton1=document.querySelector("#boton1");         //para querySelector se tiene que buscar como id
    boton1.addEventListener("click",function(){
        console.log("botton mostrar");
        const msg=document.querySelector("#msg").value;
        console.log(msg);
        const content=document.querySelector("#content");           // puede ser const o variable, es indistinto
        content.innerHTML="<h1 id='texto'>"+msg+"</h1>";
    })
    console.log(boton1);
    const botton3=document.querySelector("#boton3");
    boton3.addEventListener("click",cambiar_color);

    const boton4=document.querySelector("#boton4");
    boton4.addEventListener("click",escribe_texto);

})
();

function borrar(){
    console.log("boton borrar");
    const texto=document.querySelector("#texto");
    //tambien puedo poner const document.querySelector("#texto").remove();
    texto.remove();           //si uso remove, borra el elemento actual, remove no recibe parametros
}

function cambiar_color(){
    console.log("Cambiando color...");
    const texto=document.querySelector("#texto");
    if(texto!=null && texto!=undefined){
        texto.setAttribute("style","color:blue");     //con setAtributte se cambian los atributos
    }
}

function escribe_texto(){
    document.querySelector("#msg").value="hola mundo";
}