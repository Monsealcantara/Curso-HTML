(function(){
    const page1=document.querySelector("#page1");
    page1.addEventListener("click",function(){
        const content=document.querySelector("#content");
        loader(content);
    });
    const page3=document.querySelector("#page3");
    page3.addEventListener("click",function(){
        const contenido=document.querySelector("#content");
        loader_2(contenido);
    });
    const page2=document.querySelector("#page2");
    page2.addEventListener("click",function(){
        const contenido_2=document.querySelector("#content");
        loader_3(contenido_2);
    });
})();

const loader=(element)=>{   //funcion flecha , ocupa => para definir a la funcion
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){             //con el if pruebo que no haya error
            element.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","html/page1.html",true);         //con metodo get busca la página en el servidor
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");            //para que no ponga pretextos de que no tengo permiso
    xmlhttp.send(); 
};
const loader_3=(element)=>{   //funcion flecha , ocupa => para definir a la funcion
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){             //con el if pruebo que no haya error
            element.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","html/page2.html",true);         //con metodo get busca la página en el servidor
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");            //para que no ponga pretextos de que no tengo permiso
    xmlhttp.send(); 
};
const loader_2=(element)=>{   //funcion flecha , ocupa => para definir a la funcion
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){             //con el if pruebo que no haya error
            element.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","html/page3.html",true);         //con metodo get busca la página en el servidor
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");            //para que no ponga pretextos de que no tengo permiso
    xmlhttp.send(); 
};


