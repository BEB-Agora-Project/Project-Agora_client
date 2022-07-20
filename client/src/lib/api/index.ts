import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: "https://agora1123.herokuapp.com",
  withCredentials: true,
});

export const formDataConfig = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default axios;
