

//task 2.11


import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Inputt from './components/Inputt'
import Filter from './components/Filter'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)

  const [newPerson, setNewPerson] = useState(
    'a new person...')
  const [newNumber, setNewNumber] = useState(
      'phone number...')
  const [newFilter, setNewFilter] = useState(
        'filter...')

          const hook = () => {
          console.log('effect')
          axios
            .get('http://localhost:3001/persons')
            .then(response => {
              console.log('promise fulfilled')
              setPersons(response.data)
            })
        }

        useEffect(hook, [])


  const personsToShow = persons.filter(person => person.name === newFilter)

  const addPerson = (event) => {
  console.log('newName...' + newPerson)
  event.preventDefault()


if (!isExistInPhonebook(newPerson)) {
  const newObject = {
    name: newPerson,
    id: persons.length + 1,
    number: newNumber
  }
  setPersons(persons.concat(newObject))
  } else {
  alert(newPerson + ' is already in your phonebook!' )
  }
  setNewPerson('')
  setNewNumber('')
}

const isExistInPhonebook =(person) => {
let returnvalue = false
  persons.forEach((item, i) => {
    if (item.name === person) {
      returnvalue=true
    }
  })
  return returnvalue
}

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewPerson(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }




  return (
    <div>
      <h1>Phonebook</h1>

     <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      </div>

      <div>
     <Inputt addPerson={addPerson} persons={personsToShow} newPerson={newPerson} newNumber={newNumber}
 handlePersonChange = {handlePersonChange} handleNumberChange= {handleNumberChange} />
      </div>

    <h1>Numbers</h1>
        <Persons persons={personsToShow} />
    </div>
  )
}
export default App
