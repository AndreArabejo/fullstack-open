const Part = ({part}) => {
  console.log("Part received:", part)
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

export default Part