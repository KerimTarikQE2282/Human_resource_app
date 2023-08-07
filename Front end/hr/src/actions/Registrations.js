import axios from 'axios';

import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_CREATE_AUTH_SUCCESS,
    USER_CREATE_AUTH_FAIL


} from './types'





export const AddEmployeeAuthentication = (email,password,re_password) => async (dispatch) => {
    
      const config = {
        headers: {
            'Content-Type': 'application/json'
            
        }
    }; 
    // console.log(postImage.employee_image);
  
    // const formData = new FormData();
    // formData.append('First_name',newEmployee.First_name);
    // formData.append('Middle_name',newEmployee.Middle_name);
    // formData.append('Last_name',newEmployee.Last_name);
    // formData.append('email',newEmployee.email);
    // formData.append('phoneNumber',newEmployee.phoneNumber);
    // formData.append('employed',newEmployee.employed);
    // formData.append('title',newEmployee.title);
    // formData.append('department',newEmployee.department);
    // formData.append('salary',newEmployee.salary);
    // formData.append('password',newEmployee.password);
    // formData.append('re_password',newEmployee.re_password);
    // formData.append('employee_image',postImage.employee_image[0]); 
    

    const body=JSON.stringify({email,password,re_password})
  
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,body,config);
  
      dispatch({
        type: USER_CREATE_AUTH_SUCCESS,
       
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_CREATE_AUTH_FAIL,
      });
    }
  };
export const AddEmployeeData=(First_name, Middle_name,Last_name,email,phoneNumber,employed,title,department,salary,employee_image )=>async dispatch=>{
 console.log("Reached here")
 console.log({email,First_name, Middle_name,Last_name,phoneNumber,employed,title,department,salary,employee_image})
 const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}; 
const employeeImageFile = await fetch(employee_image).then((response) => response.blob());
   const formData = new FormData();
     formData.append('First_name',First_name);
     formData.append('Middle_name',Middle_name);
     formData.append('Last_name',Last_name);
     formData.append('email',email);
     formData.append('phoneNumber',phoneNumber);
     formData.append('employed',employed);
     formData.append('title',title);
     formData.append('department',department);
     formData.append('salary',salary);
     formData.append('employee_image', employeeImageFile, 'image.jpg');
 
    //const body=JSON.stringify({email,First_name, Middle_name,Last_name,phoneNumber,employed,title,department,salary,employee_image})
   console.log('updated')
   // console.log(body)
    
     try{
     
      const res=await axios.post('http://127.0.0.1:8000/api/Employee-create/',formData,config)
     
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload:res.data
      })
     }
     catch(err){
      dispatch({
        type: USER_CREATE_FAIL,
      })
      console.log(err)
     }


  }
