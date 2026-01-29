"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Img1 from "@/shared/assets/about/swiper/1.png";
import Img2 from "@/shared/assets/about/swiper/2.png";
import Img3 from "@/shared/assets/about/swiper/3.png";
import { Navigation } from "swiper/modules";
import styles from "./AboutSwiper.module.scss";
import RightIcon from "@/shared/assets/icons/arrow-right-long-line.svg";

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
import "swiper/css/navigation";
import { Button } from "@/shared/ui/Button";
import { useCallback, useRef, useState } from "react";
import { clsx } from "@/shared/lib/clsx";

function AboutSwiper() {
  const sliderRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = useCallback(() => {
    if (!sliderRef.current) return;
    const swiper = sliderRef.current.swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={handleSlideChange}
      onInit={handleSlideChange}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      className={styles.swiperWrapper}
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

      <div className={styles.btns}>
        <Button
          variyant="secondary"
          className={clsx([styles.btnLeft], {
            [styles.btnNotActive]: isBeginning,
          })}
          onClick={handlePrev}
        >
          <Image src={RightIcon} alt="about" width={20} height={20} />
        </Button>
        <Button
          variyant="secondary"
          className={clsx([styles.btnRight], {
            [styles.btnNotActive]: isEnd,
          })}
          onClick={handleNext}
        >
          <Image src={RightIcon} alt="about" width={20} height={20} />
        </Button>
      </div>
    </Swiper>
  );
}

export default AboutSwiper;
