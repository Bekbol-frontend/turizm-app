"use client";
import { IProductReviews } from "@/entities/Product";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import styles from "./CatalogReviewSwiper.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Paragraph } from "@/shared/ui/Paragraph";
import { Title } from "@/shared/ui/Title";
import { StarBall } from "@/shared/ui/StarBall";
import { formatDate } from "@/shared/lib/formatDate";
import { useCallback, useRef, useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { Button } from "@/shared/ui/Button";

interface IProps {
  data: IProductReviews[];
}

function CatalogReviewSwiper({ data }: IProps) {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.block}>
      <Swiper
        ref={swiperRef}
        className={styles.swiper}
        loop
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((el) => (
          <SwiperSlide key={el.id} className={styles.item}>
            <div className={styles.itemInner}>
              <Paragraph className={styles.comment}>{el.comment}</Paragraph>
              <StarBall rating={el.rating} />
              <Title type="small" className={styles.username}>
                {el.user_name}
              </Title>
              <Title type="small" className={styles.email}>
                {el.email}
              </Title>

              <Paragraph type="medium" className={styles.date}>
                {formatDate(el.created_at)}
              </Paragraph>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigationBtns}>
        <Button
          variyant="secondary"
          className={clsx([styles.btn])}
          onClick={handlePrev}
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
        </Button>
        <Button
          variyant="secondary"
          className={clsx([styles.btn])}
          onClick={handleNext}
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
        </Button>
      </div>
    </div>
  );
}

export default CatalogReviewSwiper;
