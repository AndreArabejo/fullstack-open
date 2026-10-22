
const Hello = (props) => {
  
  return(
    <>
      <p>Hello, my name is {props.name} and I am {props.age} years old.</p>
    </>
  ) 
}

const Footer = (props) => {
  return(
    <>
      <p>This is made by <a href="https://github.com/AndreArabejo">{props.discordUser}</a></p>
    </>
  )
}

const App = () => {
  const name = 'Andre'
  const age = '25'
  
  return(
    <div>
      <Hello name={name} age={age} />
      <Footer discordUser={"AndreArabejo"}/>
  </div>
  )
  
}

export default App