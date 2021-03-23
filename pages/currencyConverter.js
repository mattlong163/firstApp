import React, { useState } from 'react';
import { render } from "react-dom"
import styles from '../styles/Home.module.css'
import axios from "axios" 

//API Key: 4883175fc683589abf63

const currencyConverter = () => {
    const[baseCurrency, setBaseCurrency] = useState("AUD")
    const[convertedCurrency, setConvertedCurrency] = useState("")
    const[baseAmount, setBaseAmount] = useState("0")
    const[convertedAmount, setConvertedAmount] = useState("")

    let getConversion = (baseCurrency, baseAmount, convertedCurrency) => {
        let base = baseCurrency
        let conv = convertedCurrency
        let amount = baseAmount


        axios ({
            method: "GET",
            url: 'https://free.currconv.com/api/v7/convert?q=' + base + '_' + conv + '&compact=ultra&apiKey=4883175fc683589abf63'
       }) 
       .then((response) => {
           console.log(response)
           setConvertedAmount((response.data[base + "_" + conv] * amount).toFixed(2))
       })
       .catch((error) => {
        console.log(error)
    })
    }

    return (
        <div className={styles.container}>
        <h1>Welcome to my Currency conversion site</h1>
        <div>
            <h3 style={{paddingTop:"100px"}}>Select your currency and the amount</h3>
        <input
            className={styles.curcard}
            type="text"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
        />
        <input
            className={styles.curcard}
            type="text"
            value={baseAmount}
            onChange={(e) => setBaseAmount(e.target.value)}
        />
        </div>
        <h3 style={{paddingTop:"25px"}}>Select the Currency you would like to convert it to</h3>
        <div>
        <input
            className={styles.curcard}
            type="text"
            placeholder="Search a currency..."
            value={convertedCurrency}
            onChange={(e) => setConvertedCurrency(e.target.value)}
        />
        <h3 className={styles.rescard}> 
            {convertedCurrency} {convertedAmount}
        </h3>
        </div>
        <button 
            style={{marginTop: "20px"}}
            onClick={() => {
                getConversion(baseCurrency, baseAmount, convertedCurrency);
            }}
            >GET</button>

        <a href="/" className={styles.HomeButton} style={{marginTop:"100px"}}>
        <h2>Home</h2>
        </a>
        </div>
    )
}

export default currencyConverter;