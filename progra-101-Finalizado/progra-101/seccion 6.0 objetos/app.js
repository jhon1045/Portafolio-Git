function describirPersona ( p ){

   
    console.log(` ${p.nombre} tiene una edad ${p.edad} y mide ${p.estatura}` )

//console.log('mauro tiene una edad de 25 y estatura de 1.25') tambien se puede hacer haci en la parte de arriba en la consola 

}

let persona = {
    nombre: 'mauro',
    edad: 25,
    estatura: 1.25
}

describirPersona(persona);
