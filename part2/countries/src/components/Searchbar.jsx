import React from 'react'

export const SearchBar = ({search, handleChange}) => {
    return (
    <div>
        <form>
            <label name = "search">Find country</label>
            <input type="text" value = {search} onChange = {handleChange} />
        </form>
    </div>
  )
}

