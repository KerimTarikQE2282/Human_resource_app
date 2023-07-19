import React from 'react'
import { AppBar, Box, Button, IconButton, Input, Paper, TextField, Toolbar, Typography,Drawer } from '@mui/material'
import {makeStyles} from '@mui/styles'
const drawerWidth=250
const useStyles=makeStyles({
  drawer:{
   width:drawerWidth
  },
  drawerpaper:{
    width:drawerWidth
  }
})
function Layout(props) {
 const classes=useStyles()
  return (

    <div className='Layout'>
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
        <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper: classes.drawerpaper}}
        >
          <div>
            <Typography variant='h5'>
              Ninja notes

            </Typography>
          </div>
        </Drawer>
      </AppBar>
    </Box>
    {props.children}
    </div>
  )
}

export default Layout