import axios from "axios";

const BASE_URL = `http://localhost:${process.env.REACT_APP_PORT}`;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
