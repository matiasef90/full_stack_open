import { useEffect, useState } from 'react'

const Button = ({name, action}) => {
  return (
    <>
      <button onClick={() => action()}>{name}</button>
    </>
  )
}
const Title = ({title}) => {
  return(
    <>
      <h1>{title}</h1>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({
  good,
  neutral,
  bad,
}) => {
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  useEffect(() => {
    setAll(good + neutral + bad)
    setAverage((good - bad) / all)
    setPositive(good / all)
  }, [good, neutral, bad, all])

  return (
    <>
      <Title title={"statistics"}/>
      {
        all === 0 
          ? <p>No feedback given</p>
          : <table>
              <tbody>
                  <StatisticLine text={"good"} value={good} />
                  <StatisticLine text={"neutral"} value={neutral} />  
                  <StatisticLine text={"bad"} value={bad} />
                  <StatisticLine text={"all"} value={all} />
                  <StatisticLine text={"average"} value={average} />
                  <StatisticLine text={"positive"} value={`${positive} %`} />
              </tbody>
          </table>
      }
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  return (
    <>
      <Title title={"give feedback"}/>
      <Button name={"good"} action={addGood}/> 
      <Button name={"neutral"} action={addNeutral}/> 
      <Button name={"bad"} action={addBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
