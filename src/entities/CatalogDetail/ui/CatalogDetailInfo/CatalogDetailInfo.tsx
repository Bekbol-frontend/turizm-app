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
import { useTranslations } from "next-intl";
import { Modal } from "@/shared/ui/Modal";
import { FormPost } from "@/features/FormPost";
import { useCallback, useState } from "react";

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

  const [modal, setModal] = useState(false);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const t = useTranslations("Product");

  return (
    <>
      <div className={styles.block}>
        <span className={styles.spanDurationDay}>
          {duration_nights !== 0
            ? `${duration_days} ${t("day")} / ${duration_nights} ${t("night")}`
            : `${duration_days} ${t("day")}`}
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
          {t("from")} {price} {t("sum")}
        </Title>

        <Paragraph type="medium" className={styles.priceDesc}>
          {t("from")} {price} {t("sum")}
        </Paragraph>

        <Paragraph type="medium" className={styles.infoPriceTitle}>
          {t("The price depends on the number of people in the group")}
        </Paragraph>

        <Paragraph type="small" className={styles.infoPriceDesc}>
          {t("The price depends on the number of people in the group")}
        </Paragraph>

        <div className={styles.infoCount}>
          <div className={styles.infoCountInner}>
            <div className={styles.top}>
              <Image src={Team} alt={slogan} width={20} height={20} />
              <Title type="medium">{max_people}</Title>
            </div>
            <Paragraph type="small" className={styles.desc}>
              {t("Max number of travelers")}
            </Paragraph>
          </div>
          <div className={styles.infoCountInner}>
            <div className={styles.top}>
              <Image src={UserFollow} alt={slogan} width={20} height={20} />
              <Title type="medium">{min_age}</Title>
            </div>
            <Paragraph type="small" className={styles.desc}>
              {t("Age")}
            </Paragraph>
          </div>
        </div>

        <Button
          variyant="secondary"
          className={styles.btnBron}
          onClick={onShowModal}
        >
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
            <Paragraph className={styles.routesInfo}>{t("Road map")}</Paragraph>
          </div>
        </div>

        <Title type="medium" className={styles.shortTitle}>
          {t("Brief description")}
        </Title>
        <Paragraph type="small" className={styles.descInfo}>
          {description}
        </Paragraph>
      </div>

      <Modal isOpen={modal} onClose={onCloseModal}>
        <FormPost productId={data.id} />
      </Modal>
    </>
  );
}

export default CatalogDetailInfo;
