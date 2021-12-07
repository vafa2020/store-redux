import http from "./httpservice";

export const signUp = (data) => {
  return http.post(`/user/register`, data);
};
