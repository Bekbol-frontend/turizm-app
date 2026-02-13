"use client";
import { imgUrl } from "@/shared/api";
import { Heading } from "../../Heading";
import { ISectionBanner } from "../types";
import styles from "./SectionBanner.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

interface IProps {
  data: ISectionBanner;
}

function SectionBanner({ data }: IProps) {
  const { images, title } = data;

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiperWrapper}
      >
        {images.map((el, index) => (
          <SwiperSlide key={`${el}_${index}`}>
            <div
              className={styles.item}
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .4)), url(${imgUrl}/${el})`,
              }}
            >
              <div className={styles.inner}>
                <Heading type="small" className={styles.title}>
                  {title}
                </Heading>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SectionBanner;
