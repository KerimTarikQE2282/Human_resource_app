import axios from 'axios';

import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,

} from './types'





export const AddEmployee = (newEmployee,postImage) => async (dispatch) => {
    
      const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
            
        }
    }; 
    console.log(postImage.employee_image);
  
    const formData = new FormData();
    formData.append('First_name',newEmployee.First_name);
    formData.append('Middle_name',newEmployee.Middle_name);
    formData.append('Last_name',newEmployee.Last_name);
    formData.append('email',newEmployee.email);
    formData.append('phoneNumber',newEmployee.phoneNumber);
    formData.append('employed',newEmployee.employed);
    formData.append('title',newEmployee.title);
    formData.append('department',newEmployee.department);
    formData.append('salary',newEmployee.salary);
    formData.append('password',newEmployee.password);
    formData.append('re_password',newEmployee.re_password);
    formData.append('employee_image',postImage.employee_image[0]); 
    

    
  
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,formData,config);
  
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_CREATE_FAIL,
      });
    }
  };