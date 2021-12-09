import http from "./httpservice";

export const loginUser = (data) => {
  return http.post(`/user/login`, data);
};
