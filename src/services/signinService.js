import http from "./httpservice";

export const signinServer = (data) => {
  return http.post(`user/register`, data);
};
