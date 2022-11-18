const imagenes = document.querySelectorAll('.img_galeria');
const imagenesLi = document.querySelector('.agregar-imagen');
const contenedorImg = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
 imagen.addEventListener('click', ()=>{
     aparecerImagen(imagen.getAttribute('src'))
   })
})

const aparecerImagen = (imagen)=>{
   imagenesLi.src = imagen;
   contenedorImg.classList.toggle('show')
}