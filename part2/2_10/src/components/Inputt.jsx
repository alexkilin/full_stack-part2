const Inputt = ({addPerson, newPerson, newNumber, handlePersonChange, handleNumberChange }) => {

//   const addPerson = (event) => {
//   console.log('newName...' + newPerson)
//
//   event.preventDefault()
//
//
// if (!isExistInPhonebook(newPerson)) {
//   const newObject = {
//     name: newPerson,
//     id: persons.length + 1,
//     number: newNumber
//   }
//   setPersons(persons.concat(newObject))
//   } else {
//   alert(newPerson + ' is already in your phonebook!' )
//   }
//   setNewPerson('')
//   setNewNumber('')
// }
//
// const isExistInPhonebook =(person) => {
// let returnvalue = false
//   persons.forEach((item, i) => {
//     if (item.name === person) {
//       returnvalue=true
//     }
//   })
//   return returnvalue
// }



  return (

    <form onSubmit={addPerson}>
    <div> name: <input value={newPerson} onChange={handlePersonChange}/></div>
    <div> number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <button type="submit">save</button>
  </form>

  )
}

export default Inputt
