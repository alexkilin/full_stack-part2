import Person from './Person'
const Persons =({persons, deletePerson}) =>{

// const personsToShow = persons.filter(person => {
// console.log(person.name ===filter)
  // person.name ===filter
// })

return (
<ul>
   {persons.map(person =>
    <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />
)}
</ul>
)


}

export default Persons
