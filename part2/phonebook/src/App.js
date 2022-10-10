import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { AddFormContact } from "./components/AddFormContact";
import { Persons } from "./components/Persons";
import axios from "axios";

function App() {
  const [fullContacts, setFullContacts] = useState([]);
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");

  const [number, setNumber] = useState("");

  useEffect(() => {
    
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setFullContacts(response.data)
        setPersons(fullContacts)

      })
      .catch((err) => {
        throw new Error (err.data)
      })
      
      
  },[]);

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNumber(e.target.value);
  const searchContact = (querySearch) => {
    const listContactsFiletered = fullContacts.filter((contact) =>
      contact.name.toLowerCase().startsWith(querySearch.toLowerCase())
    );
    setPersons(listContactsFiletered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: number,
    };

    const checkPerson = fullContacts.some(
      (contact) => contact.name === newPerson.name
    );
    checkPerson
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setFullContacts([...fullContacts, newPerson]);

    setNewName("");
  };

  return (
    <div>
    
      <h2>Phonebook</h2>

      <SearchBar searchContact={searchContact} />

      <h3>Add a new contact</h3>

      <AddFormContact
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        number={number}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
