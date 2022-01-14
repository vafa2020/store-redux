import http from "./httpservice";

export const signupServer = (data) => {
  return http.post(`user/register`, data);
};
