
import { Part } from "./part"

export const Content = ({ parts }) => {
  return (<>
    {
      parts.map(el => <Part key={el.id} name={el.name} exercises={el.exercises} />)
    }
  </>)
}
