import axios from "axios";
const BASE_URL = "https://gentle-visor-duck.cyclic.app";

export default axios.create({
  baseURL: BASE_URL,
  timeout:9000,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout:9000,
  withCredentials: true,
});
