import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { reset_password } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import forgotPassword from '../../Images/forgotPassword.jpg'
function ResetPassword({reset_password}) {
  const navigate=useNavigate()
  const [RequestSent,setRequestSent]=React.useState(false)
  const [email,setEmail]=React.useState('')
  const handleChange=(e)=>{
    setEmail(e.target.value)
    console.log(email)
  }
  const handleSubmit=(e)=>{
    console.log('reached here')
    e.preventDefault()
    reset_password(email);
    setRequestSent(true)
    navigate('/CheckEmail')
  }
 
  return (
    <div>
    <Paper className='ResetPassword' elevation={12}>
      <img src={forgotPassword}/>
      <Typography
      variant='h5'
      sx={{ fontWeight: 'bold',  }}
      > Reset Password</Typography>
      <br/>
    <form onSubmit={handleSubmit}>
      <TextField
      placeholder='Email'
      name='email'
      value={email}
      onChange={handleChange}
      />

  <br></br>
    <Button variant='contained' type='submit'>Submit</Button>

    </form>
    </Paper>
    </div>
  )
}

export default connect(null,{reset_password}) (ResetPassword)