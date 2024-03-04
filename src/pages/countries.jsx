import React from "react";
import Navbar  from "../components/navbar";


export default function Countries() {

    const url = 'https://restcountries.com/v3.1/all'
    
    // function displayCountries() {
    //    let allCountries = fetch(url).then((response) => {
    //        console.log('country',response.json())
    //    })
    // }

    //  displayCountries()

    async function displayAllCountries(){
         const countries = await fetch(url)
         console.log("countries", countries.json())
    }

    displayAllCountries()

    // ASSIGNMENT
    // write a function to  display just 5 countries in the console
    // 

    return (
        <>
        < Navbar />
        <h1>Welcome to Countries</h1>
        </>
        
    )

};
