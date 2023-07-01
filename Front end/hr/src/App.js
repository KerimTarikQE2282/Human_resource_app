import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Employees from './Components/ViewEmployee'
import FireEmployee from './Components/FireEmployee';
import Login from './Components/Login';



function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Employees' element={<Employees/>}></Route>
        <Route path='/Fire/:id' element={<FireEmployee/>}></Route>
      </Routes>
    
    </div>
    
  )
}

export default App