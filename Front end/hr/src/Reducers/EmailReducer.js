const initialState = {
    Email: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'EMAIL_SEND_SUCCESS':
        return {
          ...state,
        };
      case 'EMAIL_SEND_Fail':
            return {
              ...state,
              
             };
      case 'EMAIL_GET_SUCCESS':
            return {
                ...state,
                Email:payload
               };
      case 'EMAIL_GET_FAIL':
              return {
              ...state,
                    
                   };
               
      default:
        return state;
    }
  }