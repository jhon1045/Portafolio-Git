window.addEventListener('load', () => {

   let tempera = document.getElementById('Temperatura-valor');
   let temdescrip = document.getElementById('Temperatura-Descripcion');
   let tempubica = document.getElementById('Temperatura-Ubicacion');
   let iconosa = document.getElementById('iconosa');
   let velocviento = document.getElementById('Velocidad-Viento');

    let lon;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {

            console.log(posicion.coords.latitude);

            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;
        //    ubicacion actual
        //    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=802993ea02a5bcca83a4ce27cb6ea0ae`

        // ubicacion por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Sabaneta&units=metric&appid=802993ea02a5bcca83a4ce27cb6ea0ae`
            //   console.log(url)

              fetch(url)
              .then(response => {return response.json() })
              .then(data => {
                  console.log(data.main.temp); 
                  let temp = Math.round(data.main.temp)
                  tempera.textContent = `${temp}°C`

                  console.log(data.weather[0].description);
                  let desc = data.weather[0].description
                  temdescrip.textContent = desc

                  console.log(data.name);
                  let city =  data.name
                  tempubica.textContent = city

                  console.log(data.wind.speed);
                  let Viento =  data.wind.speed
                  velocviento.textContent = `${Viento}m/s`

                //   iconosAnimados

                  console.log(data.weather[0].main)
                  switch (data.weather[0].main ){
                    case  'Clouds':
                      iconosa.src = 'animate/cloudy-night-2.svg'
                   
                  break;
                 }
  
                    
                  
                })
              .catch (error => {
                console.log(error)
            })
                  

 

 
        
         })
    }
})