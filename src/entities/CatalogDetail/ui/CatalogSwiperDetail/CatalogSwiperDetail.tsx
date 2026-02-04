"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Img from "@/shared/assets/product/1.jpg";
import Image from "next/image";
import styles from "./CatalogSwiperDetail.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [Img, Img, Img, Img];

function CatalogSwiperDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.block}>
      <div className={styles.swiperWrapper}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.swiper}
        >
          {images.map((el, index) => (
            <SwiperSlide key={index} className={styles.item}>
              <Image
                src={el}
                alt="Image"
                width={400}
                height={400}
                className={styles.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          style={{ opacity: isBeginning ? 0.3 : 1 }}
          disabled={isBeginning}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          style={{ opacity: isEnd ? 0.3 : 1 }}
          disabled={isEnd}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperBottom}
      >
        {images.map((el, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
          >
            <Image
              src={el}
              alt="Image"
              width={100}
              height={100}
              className={styles.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CatalogSwiperDetail;
