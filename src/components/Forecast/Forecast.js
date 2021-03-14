import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions.js'

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "007ca66fabmsh50f78cebc444c66p18f481jsn99e4d7fc2fae",
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