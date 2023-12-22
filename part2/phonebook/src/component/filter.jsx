
export const Filter = ({setFilter}) => {
  const handleSetFilter = event => setFilter(event.target.value)
  return(<p>
    filter shown with <input onChange={handleSetFilter}/>
  </p>)
}