import axios from "axios";

export const baseURL = "https://toqtarbay.dbc.uz/api";
export const imgUrl = "https://toqtarbay.dbc.uz";

export const API = axios.create({
  baseURL,
});
