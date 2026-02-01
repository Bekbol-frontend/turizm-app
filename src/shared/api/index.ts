import axios from "axios";

export const baseURL = "http://toqtarbay.dbc.uz/api";

export const API = axios.create({
  baseURL,
});
