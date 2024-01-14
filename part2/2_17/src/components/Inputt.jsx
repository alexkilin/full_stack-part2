const Inputt = ({addPerson, newPerson, newNumber, handlePersonChange, handleNumberChange }) => {


  return (

    <form onSubmit={addPerson}>
    <div> name: <input value={newPerson} onChange={handlePersonChange}/></div>
    <div> number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <button type="submit">save</button>
  </form>

  )
}

export default Inputt
