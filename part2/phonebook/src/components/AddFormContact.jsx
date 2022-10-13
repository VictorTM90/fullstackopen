import React from 'react'

export const AddFormContact = ({handleSubmit, newName, handleNameChange, number, handleNewNumber}) => {

    return (
    <div>
        <form onSubmit = {handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value= {number} onChange = {handleNewNumber}></input>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

    </div>
  )
}
