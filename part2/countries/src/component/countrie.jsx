export const Countrie = ({countrie}) => {
  const { name, capital, languages, area, flags } = countrie
  return (<>
    <h1>{name.common}</h1>
    <p>capital {capital[0]}</p>
    <p>area {area}</p>
    <h4>languages:</h4>
    <ul>
      {Object.values(languages).map(l => <li key={l}>{l}</li>)}
    </ul>
    <img src={flags.png} alt={flags.alt} />
  </>)
}