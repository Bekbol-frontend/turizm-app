import styles from "./CatalogBanner.module.scss";
import { Heading } from "@/shared/ui/Heading";
import { Title } from "@/shared/ui/Title";

function CatalogBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Heading type="small" className={styles.heading}>
          Каталог туров
        </Heading>
        <Title type="medium" className={styles.desc}>
          Мы составили для вас самые интересные и безопасные маршруты по
          Каракалпакстану.
        </Title>
      </div>
    </section>
  );
}

export default CatalogBanner;
