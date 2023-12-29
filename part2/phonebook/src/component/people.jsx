import { deletePerson } from "../util"

export const People = ({people, filter, setReload}) => {
  const handleDelete = async (id, name) => {
    const deleteMsg = `Delete ${name}?`
    if(window.confirm(deleteMsg)) {
      await deletePerson(id)
      setReload(true)
    }
  }
  return (<>
    {
      people.length
        ? people
          .filter(filter)
          .map(p => <p key={p.id}>
            {p.name} {p.number} <button onClick={() => handleDelete(p.id, p.name)}>delete</button>
          </p>)
        : <p>...</p>
    }
  </>)
}