let nombre = prompt('cual es tu nombre')
alert('Hola ' + nombre)

let edad = parseInt(prompt('cuantos años tienes'));
let almenos12 = edad >= 12;
let Hijo = prompt('eres hij@ del dueño')
let hijoDueño = Hijo == 'si';
let pasar = almenos12 || hijoDueño;

if (pasar){
    alert('puedes pasar a la sorpresa ')
}
else{
    alert('no puedes pasar nerdo mocoso ')
}