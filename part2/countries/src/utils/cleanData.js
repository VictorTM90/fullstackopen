const cleanData = (countries) => {

    return countries.map(countrie => {
      return {
        name:countrie.name, 
        flag: countrie.flags.svg,
        capital:countrie.capital,
        languages: countrie.languages,
        area:countrie.area,
        ccn3:countrie.ccn3
      }
    })
  
  }

export {
  cleanData
} 