
const bobo = document.querySelector('.bobo');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(bobo);

bobo.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != bobo ){

        menu.classList.toggle('spread')

    }
})

