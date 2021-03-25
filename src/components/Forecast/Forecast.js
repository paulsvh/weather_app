import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions.js'
import classes from './Forecast.module.css'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [responseObj, setResponseObj] = useState({});

    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0){
            return setError(true);
        }
        setError(false);
        setResponseObj({});
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);
        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }

    })
    .then(resp => resp.json())
    .then(resp => {
        if (resp.cod !== 200){
            throw new Error()
        }
        setResponseObj(resp);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    })
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Farenheit
                </label>

                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <br/><br/>
                <button type="submit" className={classes.Button}>Get Forecast</button>

            </form>
            <Conditions responseObj={responseObj} error={error} loading={loading} />
        </div>
    )
}

export default Forecast;