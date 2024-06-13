import React, { useState } from 'react'

export default function Home() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    function submit() {
        console.log(userName, password)
        setPassword('')
        setUserName('')
    }
    return (
        <div>
            <p><input value={userName} 
                placeholder='Enter name' 
                onChange={(e) => { setUserName(e.target.value) }} /></p>
            <p><input value={password} 
                placeholder='Enter password' 
                onChange={(e) => { setPassword(e.target.value) }} /></p>
            <button onClick={submit}>Submit</button>
        </div>
    )
}
