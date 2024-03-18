// reducers.js

const initialState = {
    token: localStorage.getItem('token') || '',
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TOKEN':
        localStorage.setItem('token', action.payload);
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  