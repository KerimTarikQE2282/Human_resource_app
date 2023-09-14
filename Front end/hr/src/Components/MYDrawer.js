import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'

export const drawerWidth=240
const useStyles=makeStyles({

    drawer:{
        width:drawerWidth,
        background:'#36454f'
    },
    drawerPaper:{
        width:drawerWidth
    }
})

function MYDrawer() {
    const hitory=useHistory()
    const AddEmployee=()=>{
        history.push("/your-page")
    }
    const drawer=(
        <div className='innerdrawer'>
            
                <List>
                    hellodmnwakldnklwandknwakldklwadknwaklndwklandk;wank;dn3wqkpdn3qwk
    
    <ListItem className='Lists'  disablePadding>
        <ListItemButton onClick={AddEmployee}>
            <ListItemIcon/>
                <AddIcon/>
                <ListItemText>hello</ListItemText>
            
           </ListItemButton>
    
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton on>
            <ListItemIcon/>
                <RemoveIcon/>
                <ListItemText>hello</ListItemText>
            
           </ListItemButton>
           </ListItem>
                </List>
           
        </div>
    )
 const classes=useStyles()
  return (
    <Drawer
    sx={{backgroundColor:'#36454f'}}
   className={classes.drawer}
   variant='permanent'
   anchor="left"
   classes={{paper:classes.drawerPaper}}
   >
    <div>

    {drawer}  
</div>
   </Drawer>
  )
}

export default MYDrawer

