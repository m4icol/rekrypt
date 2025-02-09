import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const axiosAPI = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
