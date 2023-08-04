import axios from 'axios';

import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,

} from './types'





export const AddEmployee = (
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
    employee_image
  ) => async (dispatch) => {
    const header= {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    console.log('hello',
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
      employee_image
    );
    console.log('axios reached here');
  
    const formData = new FormData();
    formData.append('First_name', First_name);
    formData.append('Middle_name', Middle_name);
    formData.append('Last_name', Last_name);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('employed', employed);
    formData.append('title', title);
    formData.append('department', department);
    formData.append('salary', salary);
    formData.append('password', password);
    formData.append('re_password', re_password);
    formData.append('employee_image', employee_image);
  
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        formData,
       header
      );
  
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