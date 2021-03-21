import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions.js'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }

    })
    .then(resp => resp.json())
    .then(resp => {
        setResponseObj(resp)
    })
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions responseObj={responseObj} />
        </div>
    )
}

export default Forecast;