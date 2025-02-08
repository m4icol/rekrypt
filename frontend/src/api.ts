import axios from "axios";

const API_URL = "http://127.0.0.1:8000/methods    ";

export const api = axios({
  url: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
