import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
  
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{good + bad + neutral}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good*1 + bad*(-1) + neutral*0)/(good + bad + neutral)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{good/(good + bad + neutral)}%</td>
            </tr>
          </tbody>
        </table>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handlers
  const handleGood = () => {
    console.log('Good is', good)
    setGood(good + 1)
  }
  const handleNeutral = () => {
    console.log('Neutral is', neutral)
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    console.log('Bad is', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={'good'} />
      <Button onClick={handleNeutral} text={'neutral'} />
      <Button onClick={handleBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App