import { Title } from "@/shared/ui/Title";
import styles from "./ThePriseCatalog.module.scss";
import { IProduct } from "@/entities/Product";
import { div } from "framer-motion/client";
import { Paragraph } from "@/shared/ui/Paragraph";
import { useTranslations } from "next-intl";

interface IProps {
  data: IProduct;
}

function ThePriseCatalog({ data }: IProps) {
  const { features } = data;
  const t = useTranslations("Product");

  return (
    <div className={styles.block}>
      <div className={styles.innerBlock}>
        <Title type="medium" className={styles.title}>
          {t("The price includes")}
        </Title>
        <div className={styles.items}>
          {features
            .filter((el) => Boolean(el.is_included))
            .map((el) => (
              <div key={el.id} className={styles.item}>
                <span className={styles.iconSpan}>
                  <i className={el.icon}></i>
                </span>
                <div>
                  <Paragraph type="small" className={styles.itemDesc}>
                    {el.description}
                  </Paragraph>
                  <Paragraph className={styles.itemName}>{el.name}</Paragraph>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.innerBlock}>
        <Title type="medium" className={styles.title}>
          {t("Not included")}
        </Title>
        <div className={styles.items}>
          {features
            .filter((el) => Boolean(!el.is_included))
            .map((el) => (
              <div key={el.id} className={styles.item}>
                <span className={styles.iconSpanNot}>
                  <i className={el.icon}></i>
                </span>
                <div>
                  <Paragraph type="small" className={styles.itemDesc}>
                    {el.description}
                  </Paragraph>
                  <Paragraph className={styles.itemName}>{el.name}</Paragraph>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ThePriseCatalog;
