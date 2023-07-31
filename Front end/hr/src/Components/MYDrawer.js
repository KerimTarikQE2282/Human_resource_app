import { Drawer, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

export const drawerWidth=240
const useStyles=makeStyles({

    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    }
})
function MYDrawer() {
    
 const classes=useStyles()
  return (
    <Drawer
   className={classes.drawer}
   variant='permanent'
   anchor="left"
   classes={{paper:classes.drawerPaper}}
   >
    <div
    
    >
        <Typography
        variant='h5'
        >
            Side Drawer
        </Typography>

    </div>
   </Drawer>
  )
}

export default MYDrawer

