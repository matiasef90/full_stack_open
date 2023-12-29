import { useEffect, useState } from 'react'
import { Filter } from './component/filter'
import { PersonForm } from './component/personForm'
import { Notification } from './component/notification'
import { People } from './component/people'
import { getAll } from './util'

const App = () => {
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('...a new name')
  const [newNumber, setNewNumber] = useState('...a new number')
  const [reload, setReload] = useState(false)
  const [msg, setMsg] = useState("")

  const filtered = person => {
    const re = new RegExp(`${filter}`, 'i')
    return re.test(person.name)
  }
  useEffect(() => {
    setReload(false)
    getAll().then(res => setPeople(res.data))
  }, [reload])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <Notification info={msg}/>
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        people={people}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setReload={setReload}
        setMsg={setMsg}
      />
      <h2>Numbers</h2>
      <People people={people} filter={filtered} setReload={setReload}/>
    </div>
  )
}

export default App