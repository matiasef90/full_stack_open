import { Weather } from "./weather"

export const Countrie = ({countrie}) => {
  const { name, capital, capitalInfo, languages, area, flags } = countrie
  const [lat, lon] = capitalInfo.latlng
  return (<>
    <h1>{name.common}</h1>
    <p>capital {capital[0]}</p>
    <p>area {area}</p>
    <h4>languages:</h4>
    <ul>
      {Object.values(languages).map(l => <li key={l}>{l}</li>)}
    </ul>
    <img src={flags.png} alt={flags.alt} />
    <Weather lat={lat} lon={lon} name={capital[0]}/>
  </>)
}