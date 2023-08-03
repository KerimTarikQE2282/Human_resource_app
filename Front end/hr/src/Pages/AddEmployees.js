import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import {AddEmployee} from '../actions/Registrations'
import { connect } from 'react-redux'

function AddEmployees({AddEmployee}) {
  const [newEmployee,setnewEmployee]=React.useState({
    First_name:'',
    Middle_name:'',
    Last_name:'',
    email:'',
    Employed:'',
    Title:'',
    Phonenumber:'',
    Department:'',
    password:'',
    re_password:''
    
  })
  
  const handleChange=(e)=>{
 setnewEmployee(
{
...newEmployee,
[e.target.name]:e.target.value
 })
  }
     
const HandleSubmit=(e)=>{
  e.preventDefault()
  AddEmployee(newEmployee)
  console.log(newEmployee)
      }
  return (
    
    <div className='EmployeeHireGeneral' sx={{ position: 'relative', top: '10px' }}>
       <div className='EmployeeHire'>
      <Paper elevation={12}>
      <Typography
      variant='h5'
      >
        Hire Employee
        
      </Typography>
        <form className='EmployeeHireField' onSubmit={HandleSubmit} >
          <div>
            <TextField
            placeholder='First Name'
            name="First_name"
            value={newEmployee.First_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Middle name '
            name="Middle_name"
            value={newEmployee.Middle_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Last_Name'
            name="Last_name"
            value={newEmployee.Last_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Email'
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
            />
            </div>
            <div>
            <br/>
            <TextField
            placeholder='Phone number'
            name="Phonenumber"
            value={newEmployee.Phonenumber}
            onChange={handleChange}
            />
          
            <br/>
            <TextField
            placeholder='Title'
            name="Title"
            value={newEmployee.Title}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Department'
            name='Department'
            value={newEmployee.Department}
            onChange={handleChange}
            />
           <TextField
           placeholder='password'
           name='password'
           value={newEmployee.password}
           onChange={handleChange}
           />
           <TextField
           placeholder='Retype your password'
           name='re_password'
           value={newEmployee.re_password}
           onChange={handleChange}
           />
        <Button
       variant='contained' 
       type='submit'
       > Hire!</Button>
        </div>
        

            
        </form>
        </Paper>
        </div>
        </div>
    
  )
}
const mapStateToProps = state =>({
  user_created:  state.Registrations.Registrations,
  
});

export default connect(mapStateToProps,{AddEmployee})(AddEmployees)