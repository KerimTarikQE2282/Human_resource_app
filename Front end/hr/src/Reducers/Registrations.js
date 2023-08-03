import {
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL
  } from '../actions/types';
  
  const initialState = {
    user_created: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch(type) {
      case USER_CREATE_SUCCESS:
        return {
          
          user_created: true
        };
      case USER_CREATE_FAIL:
        return {
          
          user_created: false
        };
      default:
        return state;
    }
  }