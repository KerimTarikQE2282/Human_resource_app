import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_CREATE_AUTH_SUCCESS,
    USER_CREATE_AUTH_FAIL
  } from '../actions/types';
  
  const initialState = {
    user_auth_created: null,
    user_data_created:null


  };
  
  export default function(state = initialState, action) {
    console.log("create employee reached here")
    const { type, payload } = action;
  
    switch(type) {
      case USER_CREATE_AUTH_SUCCESS:
        return {
          ...state,
          user_auth_created: true
        };
      case USER_CREATE_AUTH_FAIL:
        return {
          ...state,
          user_auth_created: false
        };
      case USER_CREATE_SUCCESS:
        return{
          ...state,
          user_data_created: true
        }
        case USER_CREATE_FAIL:
          return{
           ...state,
           user_data_created:false
          } 
      default:
        return state;
    }
  }