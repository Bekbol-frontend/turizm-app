"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import styles from "./BannerSwiper.module.scss";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { useResponsive } from "@/shared/lib/useResponsive";
import { Paragraph } from "@/shared/ui/Paragraph";

function BannerSwiper() {
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
      <SwiperSlide
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, .1)), url('https://1zoom.club/uploads/posts/2023-03/1677959282_1zoom-club-p-ozero-aralskoe-more-3.jpg')",
        }}
        className={styles.swiperItem}
      >
        <Container>
          <div className={styles.innerItem}>
            {mobile ? (
              <Paragraph type="large" className={styles.titleOne}>
                Аральское море 1
              </Paragraph>
            ) : (
              <Title type="small" className={styles.titleOne}>
                Аральское море 1
              </Title>
            )}

            {mobile ? (
              <Title type="medium" className={styles.titleTwo}>
                Приключение на берегу исчезнувшего океана 1
              </Title>
            ) : (
              <Heading type="small" className={styles.titleTwo}>
                Приключение на берегу исчезнувшего океана 1
              </Heading>
            )}
            {mobile ? (
              <Paragraph type="large" className={styles.titleThree}>
                Таинственная природа Каракалпакстана, «Кладбище кораблей» и
                незабываемое путешествие по бескрайней пустыне 1
              </Paragraph>
            ) : (
              <Title type="medium" className={styles.titleThree}>
                Таинственная природа Каракалпакстана, «Кладбище кораблей» и
                незабываемое путешествие по бескрайней пустыне 1
              </Title>
            )}
            <div className={styles.btnWrapper}>
              <Button variyant="primary">Подобрать тур</Button>
              <Button variyant="secondary">Забронировать хостел</Button>
            </div>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0.4) 55%, rgba(255, 255, 255, .1)), url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/02/19/12/salt-lake-2.jpg')",
        }}
        className={styles.swiperItem}
      >
        <Container>
          <div className={styles.innerItem}>
            <Title type="small" className={styles.titleOne}>
              Аральское море 2
            </Title>
            <Heading type="small" className={styles.titleTwo}>
              Приключение на берегу исчезнувшего океана 2
            </Heading>
            <Title type="medium" className={styles.titleThree}>
              Таинственная природа Каракалпакстана, «Кладбище кораблей» и
              незабываемое путешествие по бескрайней пустыне 2
            </Title>
            <div className={styles.btnWrapper}>
              <Button variyant="primary">Подобрать тур</Button>
              <Button variyant="secondary">Забронировать хостел</Button>
            </div>
          </div>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
