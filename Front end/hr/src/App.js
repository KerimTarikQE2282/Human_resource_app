import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Employees from './Components/ViewEmployee'
import FireEmployee from './Components/FireEmployee';



function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Employees/>}></Route>
        <Route path='/Fire/:id' element={<FireEmployee/>}></Route>
      </Routes>
    
    </div>
    
  )
}

export default App