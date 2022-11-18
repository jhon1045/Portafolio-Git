window.addEventListener('load', ()=> {
  let temperatura = document.getElementById('temperatura-valor');
  let descrip = document.getElementById('temperatira-descrpcion');
  let ubicacion = document.getElementById('ubicacion');
  let icono = document.getElementById('icono-Animado');
  let Vviento = document.getElementById('Viento-Velocidad');



    if(navigator.geolocation){

      let lon;
      let lat;

          navigator.geolocation.getCurrentPosition( posicion =>{
              
            lat = posicion.coords.latitude;
            lon = posicion.coords.longitude;

            // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=802993ea02a5bcca83a4ce27cb6ea0ae`

            const url = `https://api.openweathermap.org/data/2.5/weather?q=Sabaneta&units=metric&appid=802993ea02a5bcca83a4ce27cb6ea0ae`
           
            fetch(url)
            .then( response => { return response.json() })
            .then( data => { 
              console.log(data.main.temp)
               let temp = Math.round(data.main.temp)
               temperatura.textContent = `${temp}ºc`

               console.log(data.name)
               let city = data.name
               ubicacion.textContent = city
               
               console.log(data.weather[0].description)
               let des = data.weather[0].description
               descrip.textContent = des

               console.log(data.wind.speed)
               let viento = data.wind.speed
               Vviento.textContent = `${viento}m/s`
                
              //  iconosanimados
               console.log(data.weather[0].main);
               switch(data.weather[0].main){
                 case "Thunderstorm":
                   icono.src = 'ani/thunder.svg'
                   console.log('limpio');
                 break;  
               }
              switch(data.weather[0].main){
                case "Clouds":
                  icono.src = 'ani/cloudy-day-3.svg'
                  console.log('clouds')
                  break;
              }
              switch(data.weather[0].main){
                case "Rain":
                  icono.src = 'ani/rainy-4.svg'
                  console.log('rain')
                  break;
              }
            
            
            })


            .catch(error => {
               console.log(error)
            
            
            })

          })
        }

})