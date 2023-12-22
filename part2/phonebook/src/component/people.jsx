export const People = ({people, filter}) => {
  return (<>
    {
      people.length
        ? people
          .filter(filter)
          .map(p => <p key={p.id}>{p.name} {p.number}</p>)
        : <p>...</p>
    }
  </>)
}