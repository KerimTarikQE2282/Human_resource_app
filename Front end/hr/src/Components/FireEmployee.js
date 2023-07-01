import React from 'react'
import { red } from '@mui/material/colors';
import { AppBar, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Input, Paper, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

function FireEmployee() {
    const [Employee,setEmployee]=React.useState('')
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf('/') + 1);
    console.log(id)
   const FireEmployee=()=>{
    axios.get(`http://127.0.0.1:8000/api/fire/${id}`)
    .then(res=>console.log(res.data))
    .catch(err=>console.error(err))
   }
    React.useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/GetEmployee/${id}`)
        .then(res=>{
            setEmployee(res.data)
            console.log(res.data);
        })
        .catch(err=>console.error(err))
    },[])
    console.log(Employee)
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
          <Button color="inherit"><AddIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
<div>
    <Paper elevation={3} sx={{width:800,height:500,marginLeft:50,marginTop:10,padding:10}}>
        <Typography>FirstName:-{Employee.FirstName}</Typography>
        <Button variant='outlined' onClick={FireEmployee}>Fire</Button>
    </Paper>
</div>

        </div>
  )
}

export default FireEmployee