var boton = document.getElementById("button");
var cuadro = document.getElementById("cuadro")

boton.addEventListener("click",()=>{
   var e = 2;
    for(i = 0; i < 11; i++){
      resul= e * i;
   }
   console.log(e + "*" + i + "=" + resul)
})

