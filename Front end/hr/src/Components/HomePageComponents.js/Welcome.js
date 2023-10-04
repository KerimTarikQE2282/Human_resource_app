import { Paper, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';

function Welcome({user,image}) {

const view_image=`http://localhost:8000${user?.employee_image}/`
  return (
    <Paper className='WelcomeDiv' elevation={2}>
  
   <img src={view_image} className='UserImageMain'/>
   <Typography variant='h5'>Welcome {user?.First_name} {user?.Middle_name}</Typography>
   

 
 
  <Typography></Typography>
    </Paper>
  )
}
const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated,
  user:state.auth.user,
  image:state.auth.user?.employee_image
});
export default connect(mapStateToProps)(Welcome);
