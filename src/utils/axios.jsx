import axios from "axios";

const API = axios.create({
  baseURL: "https://next-backend-pi-eight.vercel.app/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// Attach JWT automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // JWT stored on login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
