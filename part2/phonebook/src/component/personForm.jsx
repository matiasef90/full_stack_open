
export const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPeople,
  people,
}) => {

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setPeople([...people, { name: newName, number: newNumber, id: people.length + 1 }])
    alert(`${newName} is already added to phonebook`)
    setNewName("...a new name")
    setNewNumber("...a new number")
  }

  return(
    <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}