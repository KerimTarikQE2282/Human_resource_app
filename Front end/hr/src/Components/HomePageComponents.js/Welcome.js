import { Paper, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';

function Welcome({user}) {
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
  console.log(user)
  return (
    <Paper className='TaskList'>
    <Typography variant='h5'>First name {user?.First_name}</Typography>
    <img src={user?.employee_image}/>
     
     </Paper>
  )
}
const mapStateToProps = state =>({
  isAuthenticated : state.auth.isAuthenticated,
  user:state.auth.user
});
export default connect(mapStateToProps)(Welcome);
