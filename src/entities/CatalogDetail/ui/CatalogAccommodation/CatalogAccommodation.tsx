import { IAccommodations } from "@/entities/Product";
import styles from "./CatalogAccommodation.module.scss";
import Image from "next/image";
import { imgUrl } from "@/shared/api";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { useTranslations } from "next-intl";

interface IProps {
  activeTab: number;
  data: IAccommodations[];
}

function CatalogAccommodation(props: IProps) {
  const { activeTab, data } = props;
  const accommodationData = data.find((el) => el.day_number === activeTab);
  const t = useTranslations("Product");

  if (!accommodationData) return null;

  const { name, image, description, price, day_number } = accommodationData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBlock}>
        <Title type="medium" className={styles.topBlockTitle}>
          {day_number} - {t("day")}. {t("Comfortable location and relaxation")}
        </Title>
      </div>

      <div className={styles.block}>
        <div className={styles.imgBlock}>
          <Image
            src={`${imgUrl}/${image}`}
            alt={name}
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.infoBlock}>
          <Title type="medium" className={styles.title}>
            {name}
          </Title>
          <Paragraph className={styles.desc}>{description}</Paragraph>
          <Title className={styles.price}>
            {price} {t("sum")}
          </Title>
        </div>
      </div>
    </div>
  );
}

export default CatalogAccommodation;
