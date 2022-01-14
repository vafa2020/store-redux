import { LOGIN, SIGN_UP } from "./authType";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      }
    case LOGIN:
      console.log(action.payload)
      return { ...state, 
        user: action.payload }
    default:
      return state;
  }
};

export default authReducer;
