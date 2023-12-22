
export const Total = ({ parts }) => {return (<p>
  <strong>Number of exercises {parts.map(el => el.exercises).reduce((a, b) => a + b)}</strong>
</p>)}
