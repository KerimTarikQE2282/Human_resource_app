import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import {Add_user} from '../actions/auth'

function AddEmployees() {
  const [newEMployee,setNewEmployee]=React.useState({
    Firstname:'',
    Middlename:'',
    Lastname:'',
    email:'',
    Employed:'',
    Title:'',
    Department:'',
    password:'',
    re_password:''
    
  })
  const handleChange=(e)=>{
 setNewEmployee(
{
...newEMployee,
[e.target.name]:e.target.value
 })
  }
  const HandleSubmit=(e)=>{
    e.preventDefault()
    console.log(newEMployee)
    Add_user(newEMployee.Firstname,
      newEMployee.Middlename,
      newEMployee.Lastname,
      newEMployee.Employed,
      newEMployee.Title,
      newEMployee.email,
      newEMployee.password,
      newEMployee.re_password)

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
            name="Firstname"
            value={newEMployee.Firstname}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Middle name '
            name="Middlename"
            value={newEMployee.Middlename}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Last Name'
            name="Lastname"
            value={newEMployee.Lastname}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Email'
            name="email"
            value={newEMployee.email}
            onChange={handleChange}
            />
            </div>
            <div>
            <br/>
            <TextField
            placeholder='Phone number'
            name="Phonenumber"
            value={newEMployee.Phonenumber}
            onChange={handleChange}
            />
          
            <br/>
            <TextField
            placeholder='Title'
            name="Title"
            value={newEMployee.Title}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Department'
            name='Department'
            value={newEMployee.Department}
            onChange={handleChange}
            />
           <TextField
           placeholder='password'
           name='password'
           value={newEMployee.password}
           onChange={handleChange}
           />
           <TextField
           placeholder='Retype your password'
           name='re_password'
           value={newEMployee.re_password}
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

export default AddEmployees