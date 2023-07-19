import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Employees from './Pages/ViewEmployee'
import FireEmployee from './Pages/FireEmployee';
import Login from './Pages/Login';
import AddEmployee from './Pages/AddEmployees'
import Layout from './Layout';



function App() {
  return (
    
    <div>
      <Layout>
      <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/Employees' element={<Employees/>}></Route>
        <Route path='/Fire/:id' element={<FireEmployee/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        
      </Routes>
      </Layout>
      
    
    </div>
    
  )
}

export default App