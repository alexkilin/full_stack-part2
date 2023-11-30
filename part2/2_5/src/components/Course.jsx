const Course = ({ course }) => {
  return (


    <div>
       <h2>{course.name}</h2>
          <ul>
            {course.parts.map(part =>
              <p key={part.id}>{part.name} {part.exercises}</p>
        )}
          </ul>
          <h4>Total of {total(course.parts)} exercises</h4>
    </div>

  )
}

const total = (array)  =>
{
let initialValue = 0;
let returnvalue = 0
returnvalue = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,
  initialValue,
);
return returnvalue;
}


export default Course
