
//task 2.11, 2.12, 2.13, 2.14, 2.15


import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Inputt from './components/Inputt'
import Filter from './components/Filter'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newPerson, setNewPerson] = useState(
    'a new person...')
  const [newNumber, setNewNumber] = useState(
      'phone number...')
  const [newFilter, setNewFilter] = useState(
        'filter...')

        useEffect(() => {
          personService
            .getAll()
            .then(persons => {
        setPersons(persons)
            })
        }, [])


  const addPerson = event => {
  event.preventDefault()

if (!isExistInPhonebook(newPerson)) {
  const newObject = {
    name: newPerson,
    id: persons.length + 1,
    number: newNumber
  }
personService
   .create(newObject)
   .then(returnedPerson => {
     setPersons(persons.concat(returnedPerson))
   })

  } else {
  if  (confirm(newPerson + ' is already in your phonebook!Update information???' )) {
    const newObject = {
      name: newPerson,
      id: findIdByName(persons, newPerson),
      number: newNumber
    }
    personService
       .update(newObject.id, newObject)
       .then(returnedPerson => {
         setPersons(persons.map(person =>person.name !== newPerson? person : returnedPerson))
       })
  }}
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

const findIdByName =(persons, name) =>{
  let returnvalue=null;
    persons.forEach((item, i) => {
      if (item.name === name) {
        returnvalue=item.id
      }
    })
    return returnvalue;
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


  const personsToShow = persons.filter(person =>
    {
      if (newFilter==="") {
        return true
      } else {
         return person.name === newFilter
       }
     }
      )

    const deletePerson = id => {
      console.log("Удалить ---" + id)
      personService
         .deleteById(id)
         .then(response => {
             setPersons(persons.filter(p => { return p.id !== id}))
                  })
           console.log(persons)
         }

  return (
    <div>
      <h1>Phonebook</h1>

     <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      </div>

      <div>
     <Inputt addPerson={addPerson} persons={persons} newPerson={newPerson} newNumber={newNumber}
 handlePersonChange = {handlePersonChange} handleNumberChange= {handleNumberChange} />
      </div>

    <h1>Numbers</h1>
        <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}
export default App
