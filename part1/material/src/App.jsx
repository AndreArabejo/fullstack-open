import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <p>Press a button to start</p>
  }

  return (
    <div>
      {props.allClicks.join(' ')}
    </div>
  )

}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    console.log('left value', left)
    console.log('history', allClicks)
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    console.log('right value', right)
    console.log('history', allClicks)
    setRight(right + 1)
    setAll(allClicks.concat('R'))
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {left + right}</p>
    </div>

  )
}

export default App