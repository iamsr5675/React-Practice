import React, {useState} from 'react'

function FunctionCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({lasttName: e.target.value})}/>
            <h2>First Name is {name.firstName}</h2>
            <h2>Last Name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default FunctionCounterThree
