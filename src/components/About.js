import React,{useState} from 'react'

export default function About() {
    const [newUser,setNewUser]=useState({
        name:'',
        email:'',
        password:''
    })
    function handleUser(e){
        const {name,value}=e.target
        //console.log(name,value)
        setNewUser(prevUser=>({
            ...prevUser,
            [name]:value
        }))
    }
    //const handleUser=()=>{}
    function submit(){
        console.log(newUser)
        setNewUser({name:'',email:'',password:''})
    }
  return (
    <div>
      <h1>
        This is About
      </h1>
      <p>
        <input 
            placeholder='Enter name' 
            value={newUser.name}
            name='name'
            onChange={handleUser}/>
      </p>
      <p>
        <input
            placeholder='Enter email'
            name='email'
            value={newUser.email}
            onChange={handleUser}/>  
      </p>
      <p>
        <input
            placeholder='password'
            value={newUser.password}
            name='password'
            onChange={handleUser}/>
      </p>
      {/* <button onClick={()=>(console.log(newUser))}> Submit </button> */}
      <button onClick={submit}> Submit </button>
    </div>
  )
}
