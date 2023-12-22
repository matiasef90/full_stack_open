import { useState } from 'react'
import { Filter } from './component/filter'
import { PersonForm } from './component/personForm'
import { People } from './component/people'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: 1 }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('...a new name')
  const [newNumber, setNewNumber] = useState('...a new number')

  const filtered = person => {
    const re = new RegExp(`${filter}`, 'i')
    return re.test(person.name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        people={people}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPeople={setPeople}
      />
      <h2>Numbers</h2>
      <People people={people} filter={filtered}/>
    </div>
  )
}

export default App