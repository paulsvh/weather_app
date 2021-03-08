import React, { useState } from 'react';

const Forecast = () => {
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "007ca66fabmsh50f78cebc444c66p18f481jsn99e4d7fc2fae",
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }
})
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
}

export default Forecast;