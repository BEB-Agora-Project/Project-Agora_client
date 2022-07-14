import axiosInstance from "axios";
import { parseCookie } from "../utils";

const axios = axiosInstance.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

const accessToken = parseCookie(document.cookie).accessToken;
console.log(parseCookie(document.cookie));
console.log(accessToken);

export const auth = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export default axios;
