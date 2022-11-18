// // 1.escribir "hola mundo" por pantalla

// // 1.forma:

// let gato = "Hola mundo";

// document.write(gato);

// // 2.forma

// document.write("Hola Mundo")

// // formas de concatenar

// let años = 23;
// let cumple = "julio"

// // forma1
// console.log("años:" + años);
// // forma2
// console.log('años:' + años);
// // forma3
// console.log(`anños: ${años} \n${cumple}`);


// let nombre = "batman"
// let edad = "99"
// let fumas = false
// let hijos = true
// let carros = ["lambo", "himpala"]
// let otros = [
//     {hijos: "3", perros:"3", casas: "5"}
// ];

// console.log(` cual es tu nombre: ${nombre} \n cual es tu edad: ${edad} \n tu fumas ${fumas} \n tienes hijos: ${hijos}
// \n cual carro prefieres: ${carros[1]}
// `)
// const o = otros.find(Element => {
//     return Element
// })





// const numeros = [1,22,43,55,"stiven"];

// const cuadrado = numeros.map(function (nume){
//     return Math.sqrt(nume.find((item) => {
        
//     })); 
// })


// document.write(`${numeros} <br/>${cuadrado}`);

// primera forma

// const bomba = [1,2,3,4,5,6,7,8,9,10,];

// console.log(bomba)
// document.write(`${bomba}`);

// // segunda forma

// let numeros = []

// for(let i = 1; i <= 10; i++){
// numeros = i
  
// }

// document.write(numeros)
// console.log(numeros)


let suerte = Math.floor(Math.random() * 20)

alert("tu numero de la suerte es: " + suerte)

