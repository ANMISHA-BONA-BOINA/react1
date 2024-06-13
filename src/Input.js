import React, { useState } from 'react'

export default function Input() {
    const [userName,setUserName]=useState('')
    const [userPwd,setPassword]=useState('')
    function submit(){
        console.log(userName,userPwd)
    }
  return (
    <div>
      <p>
        <input placeholder='Enter name' onChange={(e)=>{setUserName(e.target.value)}}/>
        <input placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={submit}>Submit</button>
      </p>
    </div>
  )
}
