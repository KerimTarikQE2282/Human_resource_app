import React from 'react'
import { AppBar, Box, Button, IconButton, Input, Paper, TextField, Toolbar, Typography,Drawer } from '@mui/material'
import {makeStyles} from '@mui/styles'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div> <Box sx={{ flexGrow: 1 }} className='NavBar'>
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
  <br></br></div>
  )
}

export default NavBar