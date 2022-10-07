import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { AddFormContact } from "./components/AddFormContact";
import { Persons } from "./components/Persons";

function App() {
  const [fullContacts, setFullContacts] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [persons, setPersons] = useState(fullContacts);

  const [newName, setNewName] = useState("");

  const [number, setNumber] = useState("");

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
