import styles from "./Product.module.scss";
import Image from "next/image";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { StarBall } from "@/shared/ui/StarBall";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { appRoutes } from "@/shared/config/routeConfig";
import { IProduct } from "../types";
import { imgUrl } from "@/shared/api";
import { useTranslations } from "next-intl";

interface IProps {
  data: IProduct;
}

function Product({ data }: IProps) {
  const t = useTranslations("Product");

  const {
    main_image,
    title,
    rating,
    reviews_count,
    duration_days,
    duration_nights,
    price,
    slogan,
  } = data;

  return (
    <div className={styles.product}>
      <Link href={`${appRoutes.catalog}/${data.id}`} className={styles.link} />
      <div className={styles.imgBlock}>
        <Image
          src={`${imgUrl}/${main_image}`}
          alt="product"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.body}>
        <Title type="small" className={styles.title}>
          {title}
        </Title>
        <Paragraph type="medium" className={styles.titleMobile}>
          {title}
        </Paragraph>
        <Paragraph className={styles.day} type="medium">
          {duration_nights !== 0
            ? `${duration_days} ${t("day")} / ${duration_nights} ${t("night")}`
            : `${duration_days} ${t("day")}`}
        </Paragraph>
        <div className={styles.ball}>
          <Paragraph type="small">{rating}</Paragraph>
          <Paragraph
            type="medium"
            className={styles.count}
          >{`(${reviews_count})`}</Paragraph>
          <StarBall rating={rating} />
        </div>
        <Paragraph className={styles.name}>{slogan}</Paragraph>
        <Title type="medium" className={styles.price}>
          {t("from")} {price} {t("sum")}
        </Title>
        <Paragraph className={styles.priceDesc}>
          {t("from")} {price} {t("sum")}
        </Paragraph>
        <div className={styles.btns}>
          <Button variyant="secondary">Забронировать</Button>
          {/* <PhoneBtn phone={phone} /> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
