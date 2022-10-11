import React from "react";


import { Country } from "./Country";
import { DisplayCountry } from "./DisplayCountry";

export const Content = ({ filteredCountry }) => {
  
    if(filteredCountry.length > 10) return <p>Too many matches, specify another filter</p>
    if (filteredCountry.length === 1 ) return <Country country={filteredCountry[0]} />
    if(filteredCountry.length < 10 ) {
        return filteredCountry.map((country) => <DisplayCountry country={country}/>)}
};
