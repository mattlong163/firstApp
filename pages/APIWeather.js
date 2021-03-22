import React, { useState } from 'react';
import { render } from "react-dom"
import styles from '../styles/Home.module.css'
import axios from "axios" 

//API Key: 05c881694c120fdd6e5cb615f97f4739

const WeatherApp = () => {
    const[temperature, setTemperature] = useState("Press Get for the temp in")
    const[desc, setDesc] = useState(" the unexpected")
    const [city, setCity] = useState("Sydney")
    const [ country, setCountry] = useState("AU")

let getWeatherData = (city, country) => {
    let localCity = city
    let localCountry = country
    axios ({
        method: "GET",
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + localCity + ',' + localCountry + '&APPID=05c881694c120fdd6e5cb615f97f4739'
    })
    .then((response) => {
        console.log(response)
        setDesc(response.data.weather[0].description)
        setTemperature(((response.data.main.temp)-273.15).toFixed(2))
    })
    .catch((error) => {
        console.log(error)
    })
}

    return (
        <div className={styles.container}>
        <h1>
            {city} Weather
        </h1>
        <h2>
            {temperature} °C <br />
            Expect {desc} <br />
        </h2>
        <div>
        <input
            className={styles.card}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <input
            className={styles.card}
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
        />
        </div>
        <button 
            style={{marginTop: "20px"}}
            onClick={() => {
                getWeatherData(city, country);
            }}
            >GET</button>
        <p style={{marginTop: "30px"}}>Sydney time {new Date().toLocaleString()}</p>
        <a href="/" className={styles.HomeButton}>
        <h2>Home</h2>
        </a>
        </div>
    )
}

export default WeatherApp;