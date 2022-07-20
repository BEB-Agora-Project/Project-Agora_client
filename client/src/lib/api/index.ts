import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_HOST,
  withCredentials: true,
});

export const formDataConfig = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default axios;
