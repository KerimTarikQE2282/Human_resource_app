const initialState = {
    Email: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'SetEmail':
        return {
          ...state,
          Email: payload
        };
      default:
        return state;
    }
  }