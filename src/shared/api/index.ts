import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_API_URL!;
export const imgUrl = process.env.NEXT_PUBLIC_IMG_URL!;

export const API = axios.create({
  baseURL,
});
