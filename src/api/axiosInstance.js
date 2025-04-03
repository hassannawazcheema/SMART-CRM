import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/", // Update if backend runs on a different port
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
