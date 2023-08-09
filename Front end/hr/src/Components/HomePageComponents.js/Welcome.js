import { Paper, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';

function Welcome({user,image}) {
  //const   {First_name, Middle_name,Last_name,email,phoneNumber,employed,title,department,salary,password,re_password,employee_image }=user
  /*React.useEffect(() => {
   const {
      First_name,
      Middle_name,
      Last_name,
      email,
      phoneNumber,
      employed,
      title,
      department,
      salary,
      password,
      re_password,
      employee_image,
    } = user;
  }, [user]);*/
  //console.log("Welcome",user)
  //console.log(user?.employee_image)
console.log('user====>',user)
const view_image=`http://localhost:8000${user?.employee_image}/`
console.log(view_image)
  return (
    <Paper className='Welcome' elevation={5}>
  
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
