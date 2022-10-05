import React from 'react'

const Part = (prop) => {
   
    return (
        <div>
            <h1>{prop.part}</h1>
            <p>{prop.exercice}</p>
        </div>
  )
}

export default Part