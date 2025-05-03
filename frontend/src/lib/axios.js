import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.shefin.xyz/api",
  withCredentials: true,
});
