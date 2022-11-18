  const boton1 = document.getElementById('boton1'),
           hola = document.getElementById('links1');

    boton1.addEventListener('click', (e)=>{

        hola.classList.toggle('active')
        document.body.classList.toggle('opacity')

        const ruta = e.target.getAttribute('src')

        if(ruta == "img/menu_unfold_one_icon_155133.png"){
            e.target.setAttribute('src', "img/menu_unfold_one_icon_155133.png")
        }
        else{
            e.target.setAttribute('src', "img/menu_unfold_icon_155133.png")
        }
    })




