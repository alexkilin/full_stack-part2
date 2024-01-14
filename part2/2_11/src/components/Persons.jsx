import Person from './Person'
const Persons =({persons, filter}) =>{

// const personsToShow = persons.filter(person => {
// console.log(person.name ===filter)
  // person.name ===filter
// })

return (
<ul>
   {persons.map(person =>
    <Person key={person.name} person={person} />
)}
</ul>
)


}

export default Persons
