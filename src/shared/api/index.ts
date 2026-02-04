import axios from "axios";

export const baseURL = "https://toqtarbay.dbc.uz/api";

export const API = axios.create({
  baseURL,
});
