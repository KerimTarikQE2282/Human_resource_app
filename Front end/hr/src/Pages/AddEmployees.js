import { Button, Paper, TextField, Typography } from '@mui/material'

import React from 'react'
import {AddEmployeeAuthentication,AddEmployeeData} from '../actions/Registrations'
import { connect } from 'react-redux'


function AddEmployees({AddEmployeeAuthentication,AddEmployeeData,user,user_auth_created}) {
  const [newEmployee,setnewEmployee]=React.useState({
    First_name: '',
    Middle_name: '',
    Last_name: '',
    email:'',
    phoneNumber: '',
    employed: false,
    title: '',
    department: '',
    salary: 0,
    password: '',
    re_password:'',
});
const [postImage,setPostImage]=React.useState(null);
console.log('here is the user!!!!!!!!',user) 
  const handleChange=(e)=>{
    if ([e.target.name !=='employee_image']){
      setnewEmployee(
        {
        ...newEmployee,
        [e.target.name]:e.target.value
         })
    }
    if ([e.target.name]=='employee_image'){
      setPostImage(
        {
          image: e.target.files,
        }
      )
    }
 
    
  }
  //const   {First_name, Middle_name,Last_name,email,phoneNumber,employed,title,department,salary,password,re_password,employee_image }=newEmployee
  const {email,password,re_password}=newEmployee
  const {First_name, Middle_name,Last_name,phoneNumber,employed,title,department,salary }=newEmployee
  const HandleSubmit = (e) => {
    e.preventDefault();
    AddEmployeeAuthentication(email, password, re_password);
    console.log("back here")
    AddEmployeeData(
    First_name,
    Middle_name,
    Last_name,
    email,
    phoneNumber,
    employed,
    title,
    department,
    salary,
    postImage.image,
    user
      );
      
    
     
    
 
  };

     
      
  return (
    
    <div className='EmployeeHireGeneral' sx={{ position: 'relative', top: '10px' }}>
       <div className='EmployeeHire'>
      <Paper elevation={12}>
      <Typography
      variant='h5'
      >
        Hire Employee
        
      </Typography>
        <form className='EmployeeHireField' onSubmit={HandleSubmit}  encType="multipart/form-data">
          <div>
            <TextField
            placeholder='First Name'
            name="First_name"
            value={newEmployee.First_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Middle name '
            name="Middle_name"
            value={newEmployee.Middle_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Last_Name'
            name="Last_name"
            value={newEmployee.Last_name}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Email'
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
            />
           
            <br/>
            <TextField
            placeholder='Phone number'
            name="phoneNumber"
            value={newEmployee.phoneNumber}
            onChange={handleChange}
            />
             </div>
            <div>
            <br/>
            <TextField
            placeholder='Title'
            name="title"
            value={newEmployee.title}
            onChange={handleChange}
            />
            <br/>
            <TextField
            placeholder='Department'
            name='department'
            value={newEmployee.department}
            onChange={handleChange}
            />
           <TextField
           placeholder='password'
           name='password'
           value={newEmployee.password}
           onChange={handleChange}
           />
           <TextField
           placeholder='Retype your password'
           name='re_password'
           value={newEmployee.re_password}
           onChange={handleChange}
           />
           <input
  accept="image/*"
  name='employee_image'
  onChange={handleChange}
  type='file'
/>
        <Button
       variant='contained' 
       type='submit'
       > Hire!</Button>
        </div>
        

            
        </form>
        </Paper>
        </div>
        </div>
    
  )
}
const mapStateToProps = state =>({
  user_auth_created:  state.Registrations.Registrations,
 user:state.auth.user
});

export default connect(mapStateToProps,{AddEmployeeData,AddEmployeeAuthentication,})(AddEmployees)