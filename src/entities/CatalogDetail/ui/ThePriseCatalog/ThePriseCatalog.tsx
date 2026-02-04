import { Title } from "@/shared/ui/Title";
import styles from "./ThePriseCatalog.module.scss";
import { IProduct } from "@/entities/Product";
import { div } from "framer-motion/client";
import { Paragraph } from "@/shared/ui/Paragraph";

interface IProps {
  data: IProduct;
}

function ThePriseCatalog({ data }: IProps) {
  const { features } = data;

  console.log(features);

  return (
    <div className={styles.block}>
      <div className={styles.innerBlock}>
        <Title type="medium" className={styles.title}>
          В стоимость входит
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
          Не входит
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
