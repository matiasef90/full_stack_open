export const ListResult = ({filtered, setFiltered}) => {
  return (<>{
    filtered.length && filtered.length < 11 ?
        filtered.map(e =>
          <p key={`${e.area}${e.name.common}`}>{e.name.common} 
            <button onClick={() => setFiltered([e])}>show</button>
          </p>)
        : <p>Too many matches, specify another filter</p>
  }</>)
}