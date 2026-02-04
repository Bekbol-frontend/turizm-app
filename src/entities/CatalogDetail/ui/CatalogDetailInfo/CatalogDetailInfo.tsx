"use client";

import { IProduct } from "@/entities/Product";
import styles from "./CatalogDetailInfo.module.scss";
import { Paragraph } from "@/shared/ui/Paragraph";
import { StarBall } from "@/shared/ui/StarBall";
import { Title } from "@/shared/ui/Title";
import Image from "next/image";
import Team from "@/shared/assets/icons/team-fill.svg";
import UserFollow from "@/shared/assets/icons/user-follow-fill.svg";
import MapIcon from "@/shared/assets/icons/map-2-fill.svg";
import { Button } from "@/shared/ui/Button";

interface IProps {
  data: IProduct;
}

function CatalogDetailInfo({ data }: IProps) {
  const {
    duration_days,
    duration_nights,
    rating,
    reviews_count,
    slogan,
    price,
    max_people,
    min_age,
    routes,
    description,
  } = data;

  return (
    <div className={styles.block}>
      <span className={styles.spanDurationDay}>
        {duration_nights !== 0
          ? `${duration_days} day / ${duration_nights} night`
          : `${duration_days} day`}
      </span>
      <div className={styles.ratingWrapper}>
        <Paragraph type="small">{rating}</Paragraph>
        <Paragraph
          type="medium"
          className={styles.reviewsDesc}
        >{`(${reviews_count})`}</Paragraph>
        <StarBall rating={rating} />
      </div>

      <Title type="small" className={styles.sloganTitle}>
        {slogan}
      </Title>

      <Paragraph type="medium" className={styles.sloganDesc}>
        {slogan}
      </Paragraph>

      <Title type="large" className={styles.priceTitle}>
        от {price} сум
      </Title>

      <Paragraph type="medium" className={styles.priceDesc}>
        от {price} сум
      </Paragraph>

      <Paragraph type="medium" className={styles.infoPriceTitle}>
        *Цена зависит от количество человек в группе
      </Paragraph>

      <Paragraph type="small" className={styles.infoPriceDesc}>
        *Цена зависит от количество человек в группе
      </Paragraph>

      <div className={styles.infoCount}>
        <div className={styles.infoCountInner}>
          <div className={styles.top}>
            <Image src={Team} alt={slogan} width={20} height={20} />
            <Title type="medium">{max_people}</Title>
          </div>
          <Paragraph type="small" className={styles.desc}>
            Макс количество путешественников
          </Paragraph>
        </div>
        <div className={styles.infoCountInner}>
          <div className={styles.top}>
            <Image src={UserFollow} alt={slogan} width={20} height={20} />
            <Title type="medium">{min_age}</Title>
          </div>
          <Paragraph type="small" className={styles.desc}>
            Возраст
          </Paragraph>
        </div>
      </div>

      <Button variyant="secondary" className={styles.btnBron}>
        Забронировать
      </Button>

      <div className={styles.routesWrapper}>
        <span className={styles.routesIconSpan}>
          <Image src={MapIcon} width={30} height={30} alt={slogan} />
        </span>
        <div>
          <Paragraph type="medium" className={styles.routesTitle}>
            {routes}
          </Paragraph>
          <Paragraph className={styles.routesInfo}>Дорожная карта</Paragraph>
        </div>
      </div>

      <Title type="medium" className={styles.shortTitle}>
        Краткое описание
      </Title>
      <Paragraph type="small" className={styles.descInfo}>
        {description}
      </Paragraph>
    </div>
  );
}

export default CatalogDetailInfo;
