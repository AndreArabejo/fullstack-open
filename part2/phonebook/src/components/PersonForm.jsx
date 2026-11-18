const PersonForm = ({ 
    onSubmit, 
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange
}) => {
    return (
        <form  onSubmit={onSubmit}>
            <h2>add a new</h2>
            <div>
            name: <input value={newName} onChange={handleNameChange}/>
            number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm