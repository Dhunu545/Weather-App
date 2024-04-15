import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function Body() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c93fb84e47f1ff94d403b1fe1faa1086`);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    const kelvinToCelsius = (temp) => {
        return temp - 273.15;
    };

    return (
        <>
            <div className="input-group mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            getWeather();
                        }
                    }}
                    spellCheck="false"
                />
                <button type="button" className="btn btn-outline-secondary" onClick={getWeather}>Search</button>
            </div>
            {weather && (
                <div>

                    <h2>Weather for {weather.name}, {weather.sys.country}</h2>
                    <p>Temperature: {kelvinToCelsius(weather.main.temp).toFixed(2)} °C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon" />
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </>
    );
}

