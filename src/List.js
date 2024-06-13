import React, { useState } from 'react'
import './List.css'
export default function List() {
    const [employees,setEmployees] = useState([
        {
            name : "Sony",
            age : 23,
            id : 2022,
            salary : "30,000",
            gender : "female"
        },
        {
            name : "Sonali",
            age : 27,
            id : 2025,
            salary : "35,000",
            gender : "female"
        },
        {
          name : "Sonika",
          age : 25,
          id : 2026,
          salary : "38,000",
          gender : "female"
      },
      {
        name : "Somya",
        age : 40,
        id : 2029,
        salary : "40,000",
        gender : "female"
    }
    ])
  return (
    <div className='employee-container'>
      {
        employees.map((emp)=>(
          <div className='employee' key={emp.id}>
            <p>Name: {emp.name}</p>
            <p>Age: {emp.age}</p>
            <p>ID: {emp.id}</p>
            <p>Salary: {emp.salary}</p>
            <p>Gender: {emp.gender}</p>
          </div>
        ))
      }
    </div>
  )
}
