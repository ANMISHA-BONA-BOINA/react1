import { useState } from 'react'
//import Student from './Student'
//import List from './List'
//import Input from './Input'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'

function App() {
 // const [studentName,setStudentName] = useState('') //variable declaration with an empty string
  // const [studentName,setStudentName] = useState('Sriani')
  // const [age,setAge] = useState(18)
  
  return(
    <div>
      {/*<List></List>
      <Input/>*/}
      {/* <p>Hello World!!!</p>
      <p>Name is : {studentName} and her age is : {age}</p>
      <Student name = "Sai" rollno = "547"/>
      <Student name = "SaiTeja" rollno = "502"/>
      <Student name = "Bhavani" rollno = "519"/>  */}

      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App