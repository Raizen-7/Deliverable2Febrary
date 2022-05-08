import React from 'react';

const WeatherApp = () => {
    
    return (
        <div className="Conteiner">
            <header>
                <h1>Weather App</h1> 
                <p>ciudad y pais</p>
            </header>

            <div className='imgWeather'>
                <img src="" alt="" />
                <div /*datos api */>
                    <p>Cielo</p>
                    <p>velocidad del viento</p>
                    <p>nubes</p>
                    <p>presion</p>
                </div>
            </div>    
            <div>
                <p>grados "°C" o "°F"</p>
            </div> 
            <div>
                <button>Degees °F/°C</button>
            </div>
        </div>
    );
};

export default WeatherApp;