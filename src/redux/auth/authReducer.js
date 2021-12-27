import { LOGIN, SIGN_UP } from "./authType";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
