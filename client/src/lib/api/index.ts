import axiosInstance from "axios";
import { parseCookie } from "../utils";

const axios = axiosInstance.create({
  baseURL: "http://192.168.1.15:4000",
  withCredentials: true,
});

const accessToken = parseCookie(document.cookie).accessToken;

export const auth = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export default axios;
