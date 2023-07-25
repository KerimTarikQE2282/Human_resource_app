import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function AddEmployees() {
  return (
    
    <div className='EmployeeHireGeneral' sx={{ position: 'relative', top: '10px' }}>
       <div className='EmployeeHire'>
      <Paper elevation={12}>
      <Typography
      variant='h5'
      >
        Hire Employee
        
      </Typography>
        <form className='EmployeeHireField' onsubmit={formsubmitted} enctype='multipart/form-data'>
          <div>
            <TextField
            placeholder='First Name'
            />
            <br/>
            <TextField
            placeholder='Middle name '
            />
            <br/>
            <TextField
            placeholder='Last Name'
            />
            <br/>
            <TextField
            placeholder='Email'
            />
            </div>
            <div>
            <br/>
            <TextField
            placeholder='Phone number'
            />
            <br/>
            <TextField
            placeholder='Employed Date'
            />
            <br/>
            <TextField
            placeholder='Title'
            />
            <br/>
            <TextField
            placeholder='Department'
            />
            <input 
            type='file'
            ></input>
        <Button
       variant='contained'> Hire!</Button>
        </div>
        

            
        </form>
        </Paper>
        </div>
        </div>
    
  )
}

export default AddEmployees