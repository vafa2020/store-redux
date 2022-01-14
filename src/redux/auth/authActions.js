import { SIGN_UP, LOGIN } from "./authType";

export const signupUser = (userData) => {
  return {
    type: SIGN_UP,
    payload: userData,
  };
};

export const loginUser = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};
