import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {

    const [weather, setWeather] = useState({});
    const [temperature, setTemperature] = useState(0);
    const [isCelcius, setIsCelcius] = useState(true);
;

    useEffect(() => {
        //función para la geolocalización
        function success(pos) {
            //se actualizo a let
            let crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            //consumo de API
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a32d0570e649c4eac8be3c53a9b3af30
            `).then((res) => {
                setWeather(res.data);
            setTemperature(res.data.main?.temp);
                console.log(res.data)

            })

          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error);
        

        }, [])
        
        const changeTem = () => {
            if (isCelcius) {
              // Convertir a grados Celcius
              setWeather(temperature - 273.15);
              setIsCelcius(false);
            } else {
              // Convertir a fahrenheit
              setWeather(isCelcius * 9/5 + 32);
              setIsCelcius(true);
            }
          };
       
    

    
    return (
        //JSX de la aplicación
        <div className="Conteiner">
            <header>
                <h1>Weather App</h1> 
                <div>
                    <p>{weather.name}, {weather.sys?.country}</p>
                </div>
            </header>

            <div className='imgWeather'>
                <div className='contentImg'>
            <img className='cloud' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
                <p className='degees'> ${weather.main?.temp -273.15} {setIsCelcius ? "°C" : "°F"}</p>
                </div>
                <div className='ContentData' /*datos api */> 
                    <p> "{weather.weather?.[0].description}" </p>
                    <p> Wind Speed: {weather.wind?.speed} m/s </p>
                    <p>Clouds: {weather.clouds?.all}% </p>
                    <p> Pressure: {weather.main?.pressure} mb </p>
                </div>
            </div>     
            <div>
                <button onClick={changeTem}>Degees °F/°C</button>
            </div>
        </div>
    );
};

export default WeatherApp;