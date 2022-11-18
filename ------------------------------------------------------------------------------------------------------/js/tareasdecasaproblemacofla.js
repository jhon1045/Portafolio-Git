let estudio = "240 minutos";
let cuidar = "180 minutos";
let trabajo = "180 minutos";
let descanso = "420 minutos";

console.log(" Tareas ");

for (var i = 0; i  < 14; i++){
    if(i == 0){
    console.group(" Semana: 1 " );
}
console.groupCollapsed("Dia " + (i+1));
console.log(cuidar);
console.log(trabajo);
console.log(estudio);
console.log(descanso);
console.groupEnd();

if(i == 7){
    console.groupEnd();
    console.groupCollapsed(" Semana: 2 ");
}
}

console.groupEnd();
console.groupEnd();