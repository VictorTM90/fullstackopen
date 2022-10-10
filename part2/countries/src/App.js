
import { useEffect, useState } from 'react';
import axios from 'axios'

import {cleanData} from './utils/cleanData';
import { SearchBar } from './components/Searchbar';
import { Content } from './components/Content';



function App() {
 
  const [search, setSearch] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState([])
  
  
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
          .then(response=> {
          const data = cleanData(response.data)
          setAllCountries(data)
          })
  },[])

  useEffect(()=>{
    setFilteredCountry(allCountries)
  },[allCountries])


  const handleChange = (e) =>{
    setSearch(e.target.value)
    findCountries(e.target.value)    
  }

  const findCountries = (querySearch) => {
    const countriesFilter = allCountries.filter((country) => 
    country.name.common.toLowerCase().includes(querySearch.toLowerCase()))
    setFilteredCountry(countriesFilter)
  }
  
  return (
    <div className="App">
      <SearchBar value = {search} handleChange = {handleChange} />
      <h1> Results: </h1>
      <Content filteredCountry={filteredCountry} />
    </div>
  );
}

export default App;
