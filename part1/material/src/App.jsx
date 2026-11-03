import { useState } from "react"

const History = (props) => {
  console.log('props value is ', props)
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>
  }
  return <div>Button press history: {props.allClicks.join(' ')}</div>
}

const Leader = ({left, right}) => {
  //if equal
  if (left === right) {
    return <div>Tied</div>
  }
  //if left > right
  if (left > right) {
    return <div>Left is winning</div>
  }
  //if left < right
  return <div>Right is winning</div>
  
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right +1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <Leader left={left} right={right} />
      <p>Total: {left + right}</p>
    </div>
  )
}

export default App
