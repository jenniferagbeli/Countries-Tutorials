import React from "react"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Country() {

const [country,setCountry] = useState(null);


const params= useParams()
console.log('params', params)
const url= `https://restcountries.com/v3.1/name/${params.countryName}`


useEffect(() =>{ 
    async function displayOneCountry(){
        try {
        const countries = await axios.get(url);
        const countriesBox = countries.data
        console.log('countriesBox', countriesBox[0])

        setCountry(countriesBox[0])
        } catch (error) {
            console.log("error", error);
        }
        
}
displayOneCountry();
}, [params.countryName]);

if (!country) {
    return <div>Loading...</div>
}

console.log('ha country', country);


    return (
        <div>
        < Navbar />
        <h1>Welcome to Country</h1>

        <div>
        <h2>Country:{country.name.common}</h2>
        <img src={country.flags.png} alt={country.flags.alt} className="flag-img"/>
         </div>

         <div><h3>Sub-Region: {country.subregion}</h3></div>

        <div><img src={country.coatOfArms.png} alt={country.flags.alt} className="flag-img"/></div>

        <div><h3>Capital: {country.capital}</h3></div>
        </div>
        
    )
}