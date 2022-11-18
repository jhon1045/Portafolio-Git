const materias = {
    ingles:[95,9,4,"ingles"],
    mate: [80,7,3,"mate"],
    fisica:[95,9,4,"fisica"],
    español:[99,3,1,"español"],
    bsdd:[60,5,2,"bsdd"],
    biologuia:[90,4,3,"biologui"],
    algebra: [45,2,1,"alguebra"],
}

const asistencia = ()=>{

    for (materia in materias){
        let promedio = materias[materia][0];
        let asistencia = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

         if (promedio >= 90) {
            console.log("%cPromedio en orden","color:blue");
        }
        else{
            
            console.log("%cFalta del promedio","color:red");
        }

 if (asistencia >= 8){
            console.log("%cAsistencia en orden","color:blue");
        }
        else{
            console.log("%cFalta del asistencia","color:red");
        }
 if(trabajos >= 3){
    console.log("%cTrabajos en orden","color:blue");

      }   
      else{
        console.log("%cFalta del trabajos","color:red");  
      }    
    }
}

asistencia();