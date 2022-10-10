import React from "react";
import { useState } from "react";
import { Country } from "./Country";

export const Content = ({ filteredCountry }) => {
  const [toogleBtn, setToogleBtn] = useState(false);
    
    return (
        <>
            {filteredCountry.length > 10 
            ? <p>Too many matches, specify another filter</p>
            : filteredCountry.length === 1 
            ? <Country country={filteredCountry[0]} />
            : filteredCountry.map((country) => {
                return (
                    <div key ={country.ccn3}>
                    <p>{country.name.common}</p>
                    <button onClick={() => setToogleBtn(!toogleBtn)}>show</button>
                    {toogleBtn && <Country country={country} />}
                    </div>
                );
            })
            }
        </>
    )

};
