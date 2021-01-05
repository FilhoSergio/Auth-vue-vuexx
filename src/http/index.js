import axios from "axios";
import provider from "@/provider";

const http = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function(config) {
    const token = provider.state.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;
