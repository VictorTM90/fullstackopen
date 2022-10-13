import React, { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { AddFormContact } from "./components/AddFormContact";
import { Persons } from "./components/Persons";
import {
  getAllContact,
  addContact,
  updateContact,
  deleteContact,
} from "./services/service";

function App() {
  const [fullContacts, setFullContacts] = useState([]);
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");

  const [number, setNumber] = useState("");

  useEffect(() => {
    getAllContact()
      .then((response) => {
        setFullContacts(response);
      })
      .catch((err) => {
        throw new Error(err.data);
      });
  }, []);

  useEffect(() => {
    setPersons(fullContacts);
  }, [fullContacts]);

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

    const checkPerson = fullContacts.find(
      (contact) => contact.name === newPerson.name
    );
    if (checkPerson) {
      alert(`${newPerson.name} is already added to phonebook, replace old number with a new one`)
      updateContact(checkPerson.id, newPerson)
       .then(response => {
        console.log(response)
       setFullContacts(fullContacts.map(contact => contact.id !== response.id ? contact : response))})
    };

    addContact(newPerson);
    setFullContacts([...fullContacts, newPerson]);

    setNewName("");
    setNumber("");
  };
  const handleDelete = (id, name) => {
    const templist = [...fullContacts];
    let index;
    templist.forEach((elem, i) => {
      if (elem.name === name) index = i;
    });
    templist.splice(index, 1);

    const delteConfirm = window.confirm(`You wan delete ${name}`);
    if (delteConfirm) {
      deleteContact(id);
      setFullContacts(templist);
    }
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
      {persons.map((person) => (
        <Persons key={person.id} person={person} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
