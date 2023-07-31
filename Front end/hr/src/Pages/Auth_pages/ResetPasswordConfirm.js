import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import {  reset_password_confirm } from '../../actions/auth'
import { connect } from 'react-redux'

function ResetPasswordConfirm({match,reset_password_confirm}) {
  const [requestSent,setRequestSent]=React.useState(false)
  const {uid,token}=useParams()
  console.log(uid,token)
  const [resetPassword,setresetPassword]=React.useState({
    new_password:'',
    re_new_password:''
  })
  const handleChange=(e)=>{
    setresetPassword({
      ...resetPassword,
      [e.target.name]: e.target.value
    })
  }
 const {new_password,re_new_password}=resetPassword
  const handleSubmit=(e)=>{
    e.preventDefault()
    reset_password_confirm(uid,token, new_password,re_new_password)
  }
  return (
  <div>
    <Paper className='ResetPassword' elevation={12}>
      <Typography
      variant='h5'
      sx={{ fontWeight: 'bold',  }}
      > Reset Password</Typography>
      <br/>
    <form onSubmit={handleSubmit}>
    <TextField 
                
                 placeholder='new Password'  
                 sx={{marginTop:5,marginBottom:3}}
                 onChange={handleChange}
                 name='new_password'
                 value={resetPassword.new_password}
                 />
                 <br/>
    <TextField 
                
                 placeholder='Retype new Password'  
                 sx={{marginTop:5,marginBottom:3}}
                 onChange={handleChange}
                 name='re_new_password'
                 value={resetPassword.re_new_password}
                 />

  <br></br>
    <Button variant='contained' type='submit'>Submit</Button>

    </form>
    </Paper>
    </div>
  )
}

export default connect(null,{reset_password_confirm})(ResetPasswordConfirm)