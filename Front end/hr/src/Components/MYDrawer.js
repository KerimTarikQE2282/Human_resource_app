import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';

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
        const navigate=useNavigate()
    const AddEmployee=()=>{
        navigate('/AddEmployee')
    }
    const EmployeeList=()=>{
        navigate('/ListEmployees')
    }
    const drawer=(
        <div className='innerdrawer'>
            
                <List className='innerinnerdrawer'>
                    
    
    <ListItem className='Lists'  disablePadding>
        <ListItemButton onClick={()=>AddEmployee()}>
            <ListItemIcon/>
                <AddIcon/>
                <ListItemText>Add Employee</ListItemText>
            
           </ListItemButton>
    
    </ListItem>
    <ListItem disablePadding className='Lists'>
    <ListItemButton on>
            <ListItemIcon/>
                <RemoveIcon/>
                <ListItemText>Fire an Employee</ListItemText>
            
           </ListItemButton>
           </ListItem >
           <ListItem disablePadding className='Lists'>
           <ListItemButton onClick={()=>EmployeeList()}>
            <ListItemIcon/>
                <FormatListBulletedIcon/>
                <ListItemText>List Employees</ListItemText>
            
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

