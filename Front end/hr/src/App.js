import React from 'react'
import { Route,Routes } from 'react-router-dom';
import ViewEmployees from './Pages/ViewEmployee';
import FireEmployee from './Pages/FireEmployee';
import Login from './Pages/Login';
import AddEmployee from './Pages/AddEmployees'
import Layout from './Layout';
import ViewEmployee from './Pages/ViewEmployee'



function App() {
  return (
    
    <div>
      <Layout>
      <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/ViewEmployees' element={<ViewEmployees/>}></Route>
        <Route path='/Fire/:id' element={<FireEmployee/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/LandingPage' element={<ViewEmployee/>}></Route>
      </Routes>
      </Layout>
      
    
    </div>
    
  )
}

export default App