let gato = document.getElementById('gato');

gato.addEventListener('click', (e) => {
 
    console.log(e.target)
  
})


if( gato.style.background == greenyellow ) {
    gato.backgroundColor = black
}
else{
    gato.style.background = greenyellow
}