import React, { useState } from 'react'

export const SearchBar = ({searchContact}) => {

    const [search, setSerch] = useState("")

    const handleSearch = (e)=>{
        setSerch(e.target.value)
        searchContact(e.target.value)
    }
  return (
    <div>
        <input  type="text" value= {search} onChange = {handleSearch}></input>
    </div>
  )
}
