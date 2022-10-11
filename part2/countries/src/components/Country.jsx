import React from "react";
import { useEffect } from "react";
import './country.css'

import { Weather } from "./Weather";

export const Country = ({ country }) => {
  
  const { name, flag, capital, languages, area, ccn3 } = country;
  const [cleanCapital] = capital
  const languagesValues = Object.values(languages)  

  return (
    <div className="country">
      { 
        <>
        <h2>{name.common}</h2>
        <p> {cleanCapital}</p>
        <p>Area: {area}</p>
        <ul> Languages: 
          {languagesValues.map(lan => <li key={ccn3} > {lan} </li>)}
        </ul>
        <img src={`${flag}`} alt={`${name} flag's`} />
        <Weather capital={cleanCapital} />
        </>
        }
    </div>
  );
};
