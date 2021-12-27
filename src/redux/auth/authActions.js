import { SIGN_UP, LOGIN } from "./authType";

export const signUpUser = (userData) => {
  console.log(userData);
  return {
    type: SIGN_UP,
    payload: userData,
  };
};

export const login = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};
