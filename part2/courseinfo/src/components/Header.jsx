const Header = ({course}) => {
  console.log("Header received:", course)
  return (
      <h2>{course.name}</h2>
  )
}

export default Header