class Celular {
    constructora( color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;

    }
    precionarBotonEncendiso(){
        if (prender == false ){
            alert( " tu telefono esta prendiedo");
            this.encendido = true;
        }
        else{
            alert( " el celular ya esta apagado");
        }
    }
 reiniciar(){
     if(encendido == true){
            alert("celular reiniciandose");
        }
        else {
            alert("celular apagado");
        }
    }  
    tomarFoto(){
        alert(`foto tmada en una resolucion de: ${this.redc}`);
    }
    grabar(){
        alert(`grabando en el movil: ${this.rdec}`);
    }
    info(){
        return`
        Color: <b>${this.color}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        Redp: <b>${this.rdp}</b> </br>
        Rdec: <b>${this.rdc}</b> </br>
        Ram: <b>${this.ram}</b> </br>
        `;
    }
}

celular1 = new Celular("negro","16gramos","gorila class","4k","15g");
celular2 = new Celular("negro","19gramos","full class","3k","6g");
celular3 = new Celular("negro","5gramos","ultra class","2k","3g");

document.write(`
      ${celular1.info()} </br>
      ${celular2.info()} </br>
      ${celular3.info()} </br>
`);