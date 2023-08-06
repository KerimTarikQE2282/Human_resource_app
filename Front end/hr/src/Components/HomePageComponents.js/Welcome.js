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
console.log(image)

  return (
    <Paper className='TaskList'>
  <Typography variant='h5'>First name {user?.First_name}</Typography>
  <Typography variant='h5'>Image: {image}</Typography>
 {image && <img src={image} alt='Employee' />}
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
