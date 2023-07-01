import { AppBar, Box, Button, IconButton, Input, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'

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
  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR system
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
<div>
<div>
  <form onSubmit={HandleSubmit}>
    <Typography>UserName:</Typography><TextField onChange={userNameAccept}></TextField>
    <Typography>Password:</Typography><TextField type="password" onChange={PasswordAccept}></TextField>
<Button variant='outlined' type='submit'>Submit</Button>
  </form>
</div>
</div>
    </div>
  )
}

export default Login