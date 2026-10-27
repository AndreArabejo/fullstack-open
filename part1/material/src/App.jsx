import { useState } from 'react'

const Score = ({ name, score }) => <div>{name}: {score}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [home, setHome] = useState(0)
  const [away, setAway] = useState(0)

  const plusHome = () => {
    console.log('Home scored!')
    setHome(home + 1)
  }
  const plusAway = () => {
    console.log('Away scored!')
    setAway(away + 1)
  }
  const reset = () => {
    setAway(0)
    setHome(0)
  }

  return (
    <div>
      <h1>Scoreboard</h1>
      <Score name='Home' score={home} />
      <Score name='Away' score={away} />
      <p>Total Points:{home + away}</p>
      <Button onClick={plusHome} text='+1 Home' />
      <Button onClick={plusAway} text='+1 Away' />
      <Button onClick={reset} text='Reset' />
    </div>
  )
}

export default App









