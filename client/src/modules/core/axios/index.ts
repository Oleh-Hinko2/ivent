import axios from "axios";

export const BASE_REQUEST_HEADERS = {
  "Content-type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const BASE_ADMIN_CONNECTION = axios.create({
  baseURL: "http://127.0.0.1:3001",
  headers: BASE_REQUEST_HEADERS,
});
