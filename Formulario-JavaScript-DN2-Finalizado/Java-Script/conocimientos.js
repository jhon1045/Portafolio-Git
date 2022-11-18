/*---------------- propiedades de windodw ---------------*/

/* esto nos permite habrir una ventana nueva es como en (html el target) */

/* esta es la primera formar de declarar para que se habra la ventana
window.open("https://www.youtube.com"); */

/* window.open("https://www.google.com"); */





/*-------------------- segunda forma de declararla------------------ */

/*  Nota siempre que vallamos a poner una url le tenemos que indicar al principio de que es una variable url */
/* let Url = "https://www.google.com";
window.open( Url );  */




/* --------------para cerrar una ventana de html se declara lo siguiente--------------- */

/* let ventanaUrl = "https://www.google.com";

let cerrar = window.open(ventanaUrl);

cerrar.close("https://www.google.com"); */




/*------------------- para verificar si una ventana esta habierta o cerrada ponemos en la consola de google (ventana.closed) y esta nos arrojara true(si esta abierta) y false (sie esta cerrada)--------------- */



/* ----------------para que se detanga la ejecucion de cualquier ventana de windonw basta con poner (wndodw.stop)------------------- */



/* ---------------el atributo print solo deja inprimir-------------------- */



/*---------------------- el atributo comfir (nos preguntara si queremos salir de la paguina )--------------- */

/* let respuesta = confirm("estas seguro?");

console.log(respuesta) */


/*--------------------------------------------  */
/*const screen = window.screenx;

console.log(screenx);
document.write(screen) */



/*------------------ para que me muestre el ancho izquierdo y el alto del borde que comiesa la pantalla y el borde izquierdo de nuestra paguina ----------------*/

/* const screen = window.screenLeft;
const screetop = window.screenTop;

document.write(`left : <b>${screen}</b><br/>
                top: <b>${screenTop}</b>     
` ); */



/* ------------------esto es para que cuando agamos scroll o deslicemos hacia abajo nos diga cuantos pixeles hemos bajado----------------- */

/* const arribax = window.scrollx;
alert(arribax); */



/* -----------------para mostrar en donde esta localizado el archivo en el pc colocamos (windosw.location.el nombre de la variable) --------------------------*/

/* const href = window.location.href;
document.write(href);
 */



/*------------------- NOTA: el windosw.screen.availHeight es para mostrar la resolucion del ancho -----------------*/

/* let ancho = window.screen.availHeight;
document.write(ancho); */



/* ----------------------y para monstrar el alto de la paguina colocamos windosw.screen.availWidth -------------------*/

/* let alto = window.screen.availWidth;
document.write(alto); */


/* ------------- GOOGLE DEVELOPERS-------------*/

/* google developers es lo de la consola de google */



/* ------------- Los Eventos--------- */

/* los eventos son los cambios que tiene una pagina desde cuando carga hasta cuando finaliza */
/* El punto cero: Es cuando nada de la pagina esta cargado   */
/*  un manejador de eventos tiene funciones y propiedades  */


/* Primera Forma de hacerlo con eventos */

/* const button = document.querySelector(".button");
button.addEventListener("click",saludar);
function saludar(){
    alert("hola");
} */

/* Segunda Forma */

/* const button = document.querySelector(".button");
button.addEventListener("click",()=> {
 alert("hola");
}); */



/* Nota para estos evento o este evento en especifico no funcionan las funciones flechas solo las funciones normales */


/* ------------------------------------------------------------------ */

/* let gato = 100;

alert("comienza la suma ");
prompt("cuanto es: 45 + 50");

if (gato == 65){
    document.write("es Correto");
}
else{
   document.write("perdistes ");
}
 */
/* ----------------------------------------*-------------------------- */

/* --------------------*Remover los eventos*--------------------- */

// const button = document.querySelector(".button");
// button.addEventListener("click",saludar);

// function saludar (){
//     alert("hola removedor");
//     /* La Funtion removeeventlistener sirve para remover los eventos */
    
//      button.removeEventListener("click", saludar)
// }


/*------------------------* EL OBJETO EVEN*---------------------------- */

// const button = document.querySelector(".button");
// button.addEventListener("click", (e)=>{
//     console.log(e.target);
// });
/* -------------------------------------------------------------------- */

/* -----------*FLUJOS DE EVENTOS*---------------------- */
/* Hay dos tipos de flujos de eventos los EventBlubbling (eventos de burbuja) y EventCapturing (eventos de captura)*/
/* La diferencia esque el EventBubbling viene por defecto pero el EventCapturing no viene por defecto */

// const button = document.querySelector(".button");
// const conta = document.querySelector(".conta");

// conta.addEventListener("click",(e)=>{
//     alert("hola desde el contenedor ");
    /* esto es para convertirlo en un evento de captura */
    /* el parametro e es de (Event o evento) */
    /* el stopPropagation o parar propagacion es para que no se me ejecute el EvenBubbling o que no me salga Boton1 y conta */
//     e.stopPropagation() 
// });


// button.addEventListener("click",(e)=>{
//     alert("hola desde el boton ");
// });

/* -------------------------------------------------------------------- */

/* -----------*EVENTOS DEL MOUSE O MAUSE*------------------------- */

/* click: ocurre cuando se le da click */
/* dblclick: ocurre cuando le das doble click rapidamente */

 /* ---------- *///  Ejemplo///* -------------------- */
// const button = document.querySelector(".button");
// button.addEventListener("dblclick",(e)=>{
//   alert("hola desde el boton ");
//  });

/* mouseover: ocurre cuando el puntero de se mueve sobre un elemento o sobre uno de sus hijos  */
/* dentrode los div no funciona pero dentro de un elemento si funciona */

// /* --------------- */EJEMPLO/* -------------------- */

// const conta = document.querySelector(".conta");

// conta.addEventListener("mouseover",(e)=>{
//     alert("hola desde el contenedor ");
// });

/* mouseout: ocurre cuando se mueve el puntero fuera de un elemento o de sus hijos */

// /* -------------*/EJEMPLO/* ---------------- */ 

// const conta = document.querySelector(".conta");

//  conta.addEventListener("mouseout",(e)=>{
//      alert("hola desde el contenedor ");
//  });

/* ----------------------------------------------------------------------- */

/* -----------EVENTOS DE TECLADO---------------- */

/* keydown */
/* keyup */
/* onkeyup */

/* ------------------------------------------------------------------- */

/* ---------------------EVENTOS DE INTERFAZ ------------------- */

/* error: ocurre cuando ocurre un error durante la carga de un archivo */

// /* ------------------- */EJEMPLO/* -------------------- */

// const imagen = document.querySelector(".imagen");

// imagen.addEventListener("error",()=>{
//     console.log("hay un error en la pajina");
// })





/* load: es cuando la paguina esta cargando y termina de cargar cuando se termine sale el mensaje */

// /* ------------------- */EJEMPLO/* -------------------- */

// window.addEventListener("load",()=>{
//     console.log(" ha cargado la pagina con exito");
// });








/* beforeunload: es cuando le apretan el un enlace y los, depues de que el elace este a punto de cargar exitosamente aparece el mensaje */

// /* ------------------- */EJEMPLO/* -------------------- */

/* addEventListener("beforeunload",()=>{
    console.log(" ha cargado la pagina con exito");
});
 */




/* unload: esta propiedad nos permite hacer un mensaje cuando nos halla cargado la paguina del enlace */

// /* ------------------- */EJEMPLO/* -------------------- */
/* addEventListener("unload",()=>{
    console.log(" ha cargado la pagina con exito");
});
 */

/* ---------------------------------------------------------------------- */

/* select */

/* ------------------ ejercisio-------------- */
// Optener lo que el usuario esta seleccionando 


// const input = document.querySelector(".conta");
// const conta = document.querySelector(".seleccionado");

// input.addEventListener("select",(e)=>{

//     let start = e.target.selectionStart;
//     let end = e.target.selectionEnd;
//     let textoCompleto = input.value;

//     conta.innerHTML = textoCompleto.substring(start,end);
// });

/* -----------------------------------*---------------------------------- */

/* KEYUP */

/* ----------EJERCISIO PRESIONAR TECLAS------------------ */

// const input = document.querySelector(".conta");
// const conta = document.querySelector(".seleccionado");

// input.addEventListener("keyup",(e)=>{
  
//     let tecla = e.key;
//     nuevoContenido = `la tecla fue : ${tecla} `;
//     conta.innerHTML = nuevoContenido;

// });

/* --------------------------*----------------*----------------------------------- */

/* --------------EVENTOS DE TEMPORIZADORES------------------- */


/* setTimeout */

// se declara 



// const intervalo = setInterval(()=>{
    /* resibe dos parametros */
    /* es un temporizador */
    // document.write("hola mendo");
    // },2000);
    /* para terminar los temporizadores coolocamos  */

    // clearInterval(intervalo);
    // clearTimeout;
    
    /* como se finaliza un intervalo */

    // setTimeout(()=>{
    //     clearTimeout(intervalo);
    // },10000);