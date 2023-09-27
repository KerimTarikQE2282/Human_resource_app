const initialState = {
   data:null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'SetData':
        return{
            data:payload
        }
      
      default:
        return state;
    }
  }