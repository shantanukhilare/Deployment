import axios from "axios";

const API_URL = "http://localhost:8080/users/signin";

const login = (email, password) => {
  return axios.post(API_URL, { email, pwd: password });
};

export default {
  login,
};
