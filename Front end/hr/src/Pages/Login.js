import { AppBar, Box, Button, IconButton, Input, Paper, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import  logo from '../Images/img-removebg-preview.png'
{/*import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  gradientButton: {
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(to right, #764ba2, #667eea)',
    },
  },
}));*/}

function Login() {
  const [userName,setUserName]=React.useState('')
  const [Password,setPassword]=React.useState('')
  const userNameAccept=(e)=>{
    setUserName(e.target.value)
  }
  const PasswordAccept=(e)=>{
    setPassword(e.target.value)
  }
  console.log(userName,Password)
  const HandleSubmit=(e)=>{
    e.preventDefault()
    try{
      const response=axios.post(' http://localhost:8000/api-auth/login/ ',{
        username:userName,
        Password:Password
      })
      console.log(response)
    }catch(error){
      console.error(error)
    }
  }

{/*  const classes = useStyles();*/}
{/*className={classes.gradientButton}*/}
  return (
    <div className='LoginMain'>
      
      <div>
        <div className='login' sx={{backgroundColor: 'primary'}}> 
          <div className='innerform'>
            <Paper elevation={12}>
              <form onSubmit={HandleSubmit}>
              <img src={logo} alt="My Image" />
              <Typography 
              variant='h6'
              className='logo'
              >Human Resource</Typography>
                <TextField onChange={userNameAccept} placeholder='user name'/>
                <br/>
                <TextField type="password" placeholder='Password'  sx={{marginTop:5,marginBottom:3}}onChange={PasswordAccept}/>
                <br/>
                <Button variant='contained' type='submit'  sx={{width:210}}>Submit</Button>
              </form>
              
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login