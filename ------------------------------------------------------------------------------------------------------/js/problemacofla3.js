
class Calculadora {
    constructor (){

    }
sumar  (n1,n2){
    return parseInt (n1) + parseInt (n2);
}

 resta  (n1,n2){
    return parseInt (n1) - parseInt (n2);
}

 multi  (n1,n2) {
    return parseInt (n1) * parseInt (n2);
}

 division  (n1,n2){
    return parseInt (n1) / parseInt (n2);
}
pontencia  (num1,exp){
    
    return  num1 ** exp;
}
raizCuadrada(num){
     return Math.sqrt(num);
}
raizCubica (num0){
     return Math.cbrt(num0);
}
}

const calculadora = new Calculadora();

alert ( " cual operacion desesas hacer: ");
let gato = prompt (" 1: Sumar 2: restar 3: multi 4: divicion 5: potenciacion 6: raiz cuadrada 7: raiz cubica");

if(gato == 1){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.sumar(n1,n2);
    alert ( ` su suma es: ${resultado}`);
}

else if(gato == 2){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.resta(n1,n2);
    alert ( ` su suma es: ${resultado}`);
}

else if(gato == 3){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.multi(n1,n2);
    alert ( ` su suma es: ${resultado}`);
}

else if(gato == 4){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.division(n1,n2);
    alert ( ` su suma es ${resultado}`);
}

else if(gato == 5){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.pontencia(n1,n2);
    alert ( ` su potencia es ${resultado}`);
}

else if(gato == 6){
    let n1 = prompt( " ingresa el primer numero: ");
    resultado = calculadora.raizCuadrada(n1);
    alert ( ` su cuadradaa es ${resultado}`);
}

else if(gato == 7){
    let n1 = prompt( " ingresa el primer numero: ");
    let n2 = prompt( " ingresa el segundo numero: ");
    resultado = calculadora.raizCubica(n1);
    alert ( ` su cubicaa es ${resultado}`);
}


else {
    alert( " no se encontro ni mierd$");
}



