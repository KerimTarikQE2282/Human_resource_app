import axios from 'axios';

import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,

} from './types'





export const AddEmployee=(newEmployee)=> async dispatch=>{
    console.log('axios reached')
    const config = {
           headers: {
               'Content-Type': 'application/json'
           }
       };
       const body=JSON.stringify(newEmployee);

  try {
           const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
   
           dispatch({
               type: USER_CREATE_SUCCESS,
               payload: res.data
           });
   
          
       } catch (err) {
           dispatch({
               type: USER_CREATE_FAIL
           })
     }};