import { useState } from "react"

export default function LoginPage ( { setUser }) {
    const [logUser, setLogUser] = useState(
        {name: ''}
    )
    function handleSubmit (event) {
        event.preventDefault()
        console.log('🪲', logUser)
        setUser(logUser)
        setLogUser({name: ""})

    }
    
    function handleChange (event) {
        setLogUser({[event.target.name]: event.target.value})
    }

    return (
             <>
             <h1>Log In</h1>
                <div className="form-container">
                     <form autoComplete="false" onSubmit={handleSubmit}>
                            <label>Name</label>
                                <input type="text" name="name" value={logUser.name} onChange={handleChange} required/>
                                <button type="submit">Log In</button>
                    </form>
                </div>
            </>
    )
}