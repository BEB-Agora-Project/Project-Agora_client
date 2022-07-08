import axiosInstance from "axios";

const axios = axiosInstance.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default axios;
