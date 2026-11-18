import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: '1' },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: '2' },
    { name: 'Dan Abramov', number: '12-43-234345', id: '3' },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: '4' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const shown = newSearch.trim() === ''
    ? persons
    : persons.filter(person => 
      person.name.toLowerCase().includes(newSearch.trim().toLowerCase())
    )

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const trimmedName = newName.trim()

    //If name exists, return
    if (persons.some(p => p.name.toLowerCase() === trimmedName.toLowerCase())) {
      return alert(`${trimmedName} is already added to phonebook`)
    }

    const personObject = {
      name: trimmedName,
      number: newNumber.trim()
    }
    setPersons(persons.concat(personObject))
    setNewNumber('')
    setNewName('')
    }

  console.log('Current people', persons)
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={newSearch} onChange={handleSearchChange} />
        <PersonForm 
          onSubmit={addPerson}
          newName={newName}
          handleNameChange={handlePersonChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons shown={shown}/>
    </div>
  )
}

export default App