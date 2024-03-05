import React from "react";
import Navbar  from "../components/navbar";
import axios from "axios";
import { useState } from "react";


export default function Countries() {
    // import useState and type this//
    const [fiveItems, setFiveItems] = useState([])

    const url = 'https://restcountries.com/v3.1/all'

    

                                     // YESTERDAY PRAcTICALS // 5/03/24 //DISPLAYING THE COUNTRIES//
    // function displayCountries() {
    //    let allCountries = fetch(url).then((response) => {
    //        console.log('country',response.json())
    //    })
    // }
    //  displayCountries()

             // or//
// async function displayAllCountries(){
//     const countries = await fetch(url)
//     console.log("countries", countries.json())
// }
// displayAllCountries()


                                             // TODAYS PRACTICALS // 6/03/24// INSTALLED AXIOS//

 // store it in a container and display 5 items
    async function displayAllCountries(){
         const countries = await axios.get(url)
         const countriesBox = countries.data;

console.log('------------------------------------')

let fiveItems = countriesBox.slice(0, 5).map((item)=> {
    console.log('yea', item)
    return item;
}); 
console.log('------------------------------------')

// for the useState//
setFiveItems(fiveItems)

console.log({fiveItems});
return countriesBox;
    
}
    
    displayAllCountries()
//   console.log("countries", countries)

    
    

    return (
        <>
        < Navbar />
        <h1>Welcome to Countries</h1>
        <div>
            <ul>
                {fiveItems.map((item)=> {
                    let value = item.name.common
                    return value })}
            </ul>
        </div>
        </>
        
    )
    
};
