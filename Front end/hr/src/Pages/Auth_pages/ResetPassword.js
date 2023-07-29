import { Button, Paper, TextField } from '@mui/material'
import React from 'react'

function ResetPassword() {
  const [email,setEmail]=React.useState('')
  const handleChange=(e)=>{
    setEmail(e.target.value)
    console.log(email)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
    <Paper className='ResetPassword' elevation={12}>
    <form onSubmit={handleSubmit}>
      <TextField
      placeholder='Email'
      name='email'
      value={email}
      onChange={handleChange}
      />

  <br></br>
    <Button variant='contained'>Submit</Button>

    </form>
    </Paper>
    </div>
  )
}

export default ResetPassword