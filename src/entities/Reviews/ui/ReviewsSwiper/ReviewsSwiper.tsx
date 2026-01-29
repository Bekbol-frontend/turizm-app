"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import styles from "./ReviewsSwiper.module.scss";
import RightIcon from "@/shared/assets/icons/arrow-right-long-line.svg";

const items = [
  {
    id: 1,
    name: "Елена",
    rating: 5.0,
    country: "Москва",
    title: "Аральское море и Каньоны",
    desc: "«Я не ожидала такой красоты. Закат на берегу Арала — это лучший вид в моей жизни. Спасибо Токтарбай-ага и команде, организация на высшем уровне!»",
  },
  {
    id: 2,
    name: "Азиз",
    rating: 4.0,
    country: "Ташкент",
    title: "Каракол и озеро Сонкуль",
    desc: "«Я не ожидала такой красоты. Закат на берегу Арала — это лучший вид в моей жизни. Спасибо Токтарбай-ага и команде, организация на высшем уровне!»",
  },
  {
    id: 3,
    name: "Елена",
    rating: 4.3,
    country: "Москва",
    title: "Аральское море и Каньоны",
    desc: "«Я не ожидала такой красоты. Закат на берегу Арала — это лучший вид в моей жизни. Спасибо Токтарбай-ага и команде, организация на высшем уровне!»",
  },
  {
    id: 4,
    name: "Азиз",
    rating: 3.8,
    country: "Ташкент",
    title: "Каракол и озеро Сонкуль",
    desc: "«Я не ожидала такой красоты. Закат на берегу Арала — это лучший вид в моей жизни. Спасибо Токтарбай-ага и команде, организация на высшем уровне!»",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/shared/ui/Button";
import { useCallback, useRef, useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { Paragraph } from "@/shared/ui/Paragraph";
import { useResponsive } from "@/shared/lib/useResponsive";

function ReviewsSwiper() {
  const sliderRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { mobile } = useResponsive();

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
      slidesPerView={1.2}
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
          slidesPerView: 2.2,
        },
      }}
      className={styles.swiperWrapper}
    >
      {items.map((el) => (
        <SwiperSlide key={el.id} className={styles.swiperItem}>
          <div className={styles.swiperItemInner}>
            <Paragraph
              className={styles.descName}
              type={mobile ? "small" : "large"}
            >
              {el.name}
            </Paragraph>
            <div className={styles.ratingWrapper}>
              <Paragraph type={mobile ? "large" : "small"}>
                {el.rating}
              </Paragraph>
              <span className={styles.rating} />
            </div>
            <Paragraph
              type={mobile ? "small" : "medium"}
              className={styles.country}
            >
              {el.country}
            </Paragraph>

            <div className={styles.tag}>
              <Paragraph type={mobile ? "small" : "medium"}>
                {el.title}
              </Paragraph>
            </div>
            <Paragraph type="medium">{el.desc}</Paragraph>
          </div>
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

export default ReviewsSwiper;
