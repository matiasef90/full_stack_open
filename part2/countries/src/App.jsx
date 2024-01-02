import { useEffect, useState } from "react"
import { ListResult } from "./component/listResult"
import { Countrie } from "./component/countrie"


function App() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(rest => rest.json().then(res => setCountries(res)))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    e.preventDefault
    const filter = RegExp(e.target.value.toLowerCase())
    const countriesFiltered = countries.filter(c => filter.test(c.name.common.toLowerCase()))
    setFiltered(countriesFiltered)
  }
  return (
    <>
      find countries <input type="text" onChange={handleChange}/>
      {
        filtered.length === 1 ? <Countrie countrie={filtered[0]}/>
        : <ListResult filtered={filtered} setFiltered={setFiltered}/>
      }
    </>
  )
}

export default App
