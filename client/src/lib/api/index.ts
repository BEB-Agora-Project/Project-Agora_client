import axiosInstance from "axios";

const axios = axiosInstance.create({
  // baseURL: "https://agora1123.herokuapp.com",
  baseURL: "http://13.52.230.51:4000",

  withCredentials: true,
  timeout: 8000,
});

export const formDataConfig = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};

export default axios;
