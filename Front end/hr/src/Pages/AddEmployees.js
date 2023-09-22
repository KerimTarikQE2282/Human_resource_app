import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material'

import React from 'react'
import {AddEmployeeAuthentication,AddEmployeeData} from '../actions/Registrations'
import { connect } from 'react-redux'
import axios from 'axios';
import { useTheme } from '@emotion/react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function AddEmployees({AddEmployeeAuthentication,AddEmployeeData,user,user_auth_created}) {
  const theme = useTheme();
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
    Employee_Role:[],
    password: '',
    re_password:'',
    
});
const [postImage,setPostImage]=React.useState(null);
const [Role, setRole] = React.useState([]);
console.log('available roles===>',Role)
const [responseRoles, setResponseRoles] = React.useState([]);
console.log(responseRoles)
//States*********************************************************

  const handleChange=(e)=>{
    if ([e.target.name !=='employee_image']){
      setnewEmployee(
        {
        ...newEmployee,
        [e.target.name]:e.target.value
         })
    }
    else if ([e.target.name]=='employee_image'){
      setPostImage(
        {
          image: e.target.files,
        }
      )
    }
    else if([e.target.name] == 'Role'){
      const {
        target: { value },
      } = e;
      setRole(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
 
    
  }
  //Handle Change*****************************************************
  const EmployedBy=user.email //Employed by whom
  //******************************************* */
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/Role/')
      .then(res => {
        const availableRoles = res.data;
        setResponseRoles(availableRoles);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //get the roles that are available**************************
 
 
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
    EmployedBy
      );
      };

    //**********************send the input data to the action handler ********************/
      
  return (
    
    <div className='EmployeeHireGeneral' >
       <div className='EmployeeHire'>
      <Paper elevation={12} className='AddEmployeePaper'>
      <Typography
      variant='h5'
      >
        Hire Employee
        
      </Typography>
        <form className='EmployeeHireField' onSubmit={HandleSubmit}  encType="multipart/form-data">
         
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
            <br/>
           <TextField
           placeholder='password'
           name='password'
           value={newEmployee.password}
           onChange={handleChange}
           />
           <br/>
           <TextField
           placeholder='Retype your password'
           name='re_password'
           value={newEmployee.re_password}
           onChange={handleChange}
           />
           <br/>
           <input
  accept="image/*"
  name='employee_image'
  onChange={handleChange}
  type='file'
/>
<br/>
<br/>
<FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={Role}
          onChange={handleChange}
          input={<OutlinedInput label="Role" />}
          MenuProps={MenuProps}
        >
          {responseRoles.map((res) => (
            <MenuItem
              key={res.id}
              value={res.RoleName}
              
            >
              {res.RoleName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        <Button
       variant='contained' 
       type='submit'
       > Hire!</Button>
        
        

            
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