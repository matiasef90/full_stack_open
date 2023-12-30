import { v4 as uuidv4 } from 'uuid'
import { create, update } from "../util"

export const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setReload,
  people,
  setMsg
}) => {

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const name = newName
    const number = newNumber
    setMsg(name)
    const addMsg = `${newName} is already added to phonebook`
    const updateMsg = addMsg + ", replace the old number with a new one?"
    setNewName("...a new name")
    setNewNumber("...a new number")
    const existe = people.find(el => el.name.toLowerCase() === name.toLowerCase())
    if (existe) {
      if(window.confirm(updateMsg)) {
        try {
          await update(existe.id, { name, number })
        } catch (error) {
          console.log(error, "error un el update")          
          setMsg({text: `Information of ${name} has already been removed from server`, style: "error"})
        }
          setReload(true)
      }
      setTimeout(() => {
        setMsg(false)
      }, 1500)
      return
    }
    await create({name, number, id: uuidv4()})
    setMsg({text: name, style: "success"})
    alert(addMsg)
    setReload(true)
    setTimeout(() => {
      setMsg(false)
    }, 1500)
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