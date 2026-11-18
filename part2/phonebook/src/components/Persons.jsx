const Persons = ({ shown }) => {
    return (
        <ul>
        {shown.map(person => <li key={person.name}>{person.name} | {person.number}</li>)}
        </ul>
    )
}

export default Persons