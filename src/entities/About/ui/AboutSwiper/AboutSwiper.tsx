"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Img1 from "@/shared/assets/about/swiper/1.png";
import Img2 from "@/shared/assets/about/swiper/2.png";
import Img3 from "@/shared/assets/about/swiper/3.png";

import { Autoplay } from "swiper/modules";

import styles from "./AboutSwiper.module.scss";

const items = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img1 },
  { id: 5, img: Img2 },
  { id: 6, img: Img3 },
  { id: 7, img: Img1 },
  { id: 8, img: Img2 },
  { id: 9, img: Img3 },
];

// Import Swiper styles
import "swiper/css";

function AboutSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className={styles.swiperWrapper}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {items.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperItem}>
          <Image
            src={el.img}
            alt="about"
            width={300}
            height={300}
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AboutSwiper;
