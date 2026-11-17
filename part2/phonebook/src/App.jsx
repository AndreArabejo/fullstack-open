import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    //If name exists, return
    if (persons.some(p => p.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    
  }

  console.log('Current people', persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App