import http from "./httpservice";

export const loginServer = (data) => {
  return http.post(`user/login`, data);
};
