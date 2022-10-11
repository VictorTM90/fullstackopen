import React from 'react'
import { useState } from "react";
import { Country } from "./Country";

export const DisplayCountry = ({country}) => {
    
    const [toogleBtn, setToogleBtn] = useState(false);

  return (
    <div>
        <p> {country.name.common}</p>
        <button onClick={() => setToogleBtn(!toogleBtn)}>{toogleBtn ? 'close' : 'show'}</button>

        {toogleBtn && <Country country={country} /> }
    </div>
  )
}
