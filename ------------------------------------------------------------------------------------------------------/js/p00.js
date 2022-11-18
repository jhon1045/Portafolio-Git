class Raza {
    constructor(color,edad,forma,planeta){
        this.planeta = planeta;
        this.color = color;
        this.edad = edad;
        this.forma = forma;
        this.info = ` soy de color ${this.color}, tengo ${this.edad} años y tengo una forma ${this.forma} y vengo de ${planeta}`;

    }
    verInfo (){
        document.write(this.info + "<br>");
    }
  
 }
   class Gato extends Raza { 
       constructor ( planeta,color,edad,forma,patas){
       super (planeta,color,edad,forma);
       this.patas = null;
}
    set setPatas (newName){
    this.patas = newName;
}

get getPatas (){
    return this.patas;
}
}
   


const ovni = new Raza ("gris",1060,"redonda","z-reticuli");
const gato = new Gato ("rojo",60,"escarlata","Orion","4");
const loro = new Raza ("azul",6,"befor","pluton");


ovni.verInfo();
gato.setPatas = "4";

document.write(gato.getPatas)



