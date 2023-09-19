const initialState = {
    Email: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    console.log("Reached employee Reducer")
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