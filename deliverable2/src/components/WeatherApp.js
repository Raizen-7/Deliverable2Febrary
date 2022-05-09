import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {

    const [weather, setWeather] = useState({})
    


    useEffect(() => {
        function success(pos) {

            let crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a32d0570e649c4eac8be3c53a9b3af30
            `).then(res => setWeather(res.data))
          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error);
        

        }, [])
        
        const temCelcius =  `${weather.main?.temp -273.15} "°C"`;
        // const temFahrenheit = `${temCelcius * 9/5 + 32} "°F"` ;

        const temMaxCelcius =  `${weather.main?.temp_max -273.15} "°C"`;
        const temMinCelcius =  `${weather.main?.temp_min -273.15} "°C"`;
        // const temMaxFahrenheit = `${temMaxCelcius * 9/5 + 32} "°F"` ;
        // const temMinFahrenheit = `${temMinCelcius * 9/5 + 32} "°F"` ;
          
    
    return (
        <div className="Conteiner">
            <header>
                <h1>Weather App</h1> 
                <div>
                    <p>{weather.name}, {weather.sys?.country}</p>
                </div>
            </header>

            <div className='imgWeather'>
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                <p>{temCelcius}</p>
                <p>Temp Max: {temMaxCelcius} - Temp Min: {temMinCelcius} </p>
                <div /*datos api */>
                    <p> "{weather.weather?.[0].description}" </p>
                    <p> Wind Speed: {weather.wind?.speed} m/s </p>
                    <p>Clouds: {weather.clouds?.all}% </p>
                    <p> Pressure: {weather.main?.pressure} mb </p>
                </div>
            </div>     
            <div>
                <button>Degees °F/°C</button>
            </div>
        </div>
    );
};

export default WeatherApp;