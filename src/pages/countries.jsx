import React from "react";
import Navbar  from "../components/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Countries() {

const url = 'https://restcountries.com/v3.1/all'
console.log(url);

                    

// 8-3-24 // Displaying on the screen
const [country,setCountry] = useState([]);

useEffect(() =>{ 
    async function displayAllCountries(){
        try {
            const countries = await axios.get(url);
        const countriesBox = countries.data;

        setCountry(countriesBox)
        } catch (error) {
            console.log("error", error);
        }
        
}
displayAllCountries();
}, []);

console.log('country', country);


// WHAT DISPLAYS ON THE BROWSER//
    return (
        <>
        < Navbar />
        <h1>Welcome to Countries</h1>
        <div className="outer-div">
            {country.slice(0 , 20).map((item) => (
                <div className="inner-div">
                    <img src={item.flags.png} alt={item.flags.alt} className="flag-img"/>
                    <h2>{item.name.common}</h2>
                <h3>{item.name.official}</h3>
                <button className="countryButton">
                    <Link to={`/country/${item.name.common}`}>View More</Link>
                </button>
                    </div>
            ) )}
        </div>
        </>
    );   
}