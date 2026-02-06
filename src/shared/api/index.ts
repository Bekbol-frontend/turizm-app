import axios from "axios";

export const baseURL = "https://toqtarbay.dbc.uz/api"; //process.env.NEXT_PUBLIC_API_URL!;
export const imgUrl = "https://toqtarbay.dbc.uz"; //process.env.NEXT_PUBLIC_IMG_URL!;

export const API = axios.create({
  baseURL,
});
