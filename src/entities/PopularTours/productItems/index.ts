import ImgProduct from "@/shared/assets/product/1.jpg";
import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  imgUrl: StaticImageData | string;
  title: string;
  day: string;
  ball: {
    count: string;
    rating: number;
  };
  name: string;
  price: string;
  phone: string;
}

export const productItems: IProduct[] = [
  {
    id: 1,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 1.8,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 99 999 99 99",
  },
  {
    id: 2,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 4.5,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 99 999 99 99",
  },
  {
    id: 3,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 3.5,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 99 999 99 99",
  },
  {
    id: 4,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 3.5,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 90 123 45 67",
  },
  {
    id: 5,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 2.1,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 90 123 45 67",
  },
  {
    id: 6,
    imgUrl: ImgProduct,
    title: "Аральское море и Каньоны",
    day: "2 дня / 1 ночь",
    ball: {
      count: "3,509",
      rating: 5,
    },
    name: "«Звездная ночь и шепот моря»",
    price: "от 3,215,000 сўм",
    phone: "+998 90 123 45 67",
  },
];
