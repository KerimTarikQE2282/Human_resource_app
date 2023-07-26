import { AppBar, Box, Button, IconButton, Input, Paper, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import  logo from '../../Images/img-removebg-preview.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../../actions/auth'

function Login( {login}) {
  const [formData,setFormData]=React.useState({
    email:'',
    Password:''
  })
 const onChange=(e)=>{
  setFormData({
  ...formData,
  [e.target.name]:e.target.value
  } 
  )
  
 }
 const {email,password}=formData
  const HandleSubmit=(e)=>{
    e.preventDefault()
    login(email,password)
  }

// is the user authenticated?
//if so redirect to home page 
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
                <TextField 
                onChange={onChange} 
                placeholder='Email'
                type='email'
                name='email'
                value={formData.email}
                required
                />
                <br/>
                <TextField 
                type="password"
                 placeholder='Password'  
                 sx={{marginTop:5,marginBottom:3}}
                 onChange={onChange}
                 name='password'
                 value={formData.password}
                 />
                <br/>
                <Button variant='contained' type='submit'  sx={{width:210}}>Login</Button>
              </form>
              <p>
                Forgot your password <Link to='/ResetPassword'>sign up</Link>
              </p>
              
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
  const mapStateToProps=state=>{
    //is authenticated
  }
}


export default connect(null,{login})(Login)