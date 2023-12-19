

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Total = ({parts}) => {

  return (
    <>
      <p>Number of exercises {parts.map(el => el.exercises).reduce((a,b) => a+b)}</p>
    </>
  )
}
const Part = ({name, exercises}) => (<>
  <p>{name} {exercises}</p>
</>)
const Content = ({parts}) => (<>
  {
    parts.map(el => <Part name={el.name} exercises={el.exercises} />)
  }
</>)
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App