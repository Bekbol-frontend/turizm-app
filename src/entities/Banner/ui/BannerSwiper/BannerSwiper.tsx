"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { useResponsive } from "@/shared/lib/useResponsive";
import { Paragraph } from "@/shared/ui/Paragraph";

import styles from "./BannerSwiper.module.scss";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IBanner } from "../../types";
import { imgUrl } from "@/shared/api";

interface IProps {
  data: IBanner[];
}

function BannerSwiper({ data }: IProps) {
  const { mobile } = useResponsive();

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className={styles.bannerSwiper}
    >
      {data.map((el) => (
        <SwiperSlide
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .4)), url(${imgUrl}/${el.image_path})`,
          }}
          className={styles.swiperItem}
          key={el.id}
        >
          <Container>
            <div className={styles.innerItem}>
              {mobile ? (
                <Paragraph type="large" className={styles.titleOne}>
                  {el.title}
                </Paragraph>
              ) : (
                <Title type="small" className={styles.titleOne}>
                  {el.title}
                </Title>
              )}

              {mobile ? (
                <Title type="medium" className={styles.titleTwo}>
                  {el.subtitle}
                </Title>
              ) : (
                <Heading type="small" className={styles.titleTwo}>
                  {el.subtitle}
                </Heading>
              )}
              {/* {mobile ? (
                <Paragraph type="large" className={styles.titleThree}>
                  {el.desc}
                </Paragraph>
              ) : (
                <Title type="medium" className={styles.titleThree}>
                  {el.desc}
                </Title>
              )} */}
              <div className={styles.btnWrapper}>
                <Button variyant="primary">Подобрать тур</Button>
                <Button variyant="secondary">Забронировать хостел</Button>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerSwiper;
