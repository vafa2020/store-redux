import { SIGN_IN, LOGIN } from "./authType";

export const signinUser = (userData) => {
  return {
    type: SIGN_IN,
    payload: userData,
  };
};

export const loginUser = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};
