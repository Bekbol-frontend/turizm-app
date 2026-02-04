"use client";

import { Title } from "@/shared/ui/Title";
import styles from "./ImportantInformation.module.scss";
import { Paragraph } from "@/shared/ui/Paragraph";

function ImportantInformation() {
  return (
    <div className={styles.block}>
      <Title type="medium" className={styles.mainTitle}>
        Важная информация
      </Title>
      <div className={styles.textBlockWrapper}>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>Одежда:</span> Обязательно возьмите
            удобную закрытую обувь (кроссовки), головной убор и солнцезащитные
            очки. Ночью в пустыне бывает про
          </span>
        </div>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>Связь:</span> На плато Устюрт и у
            моря мобильная связь и интернет отсутствуют. Это отличный шанс для
            Digital Detox!
          </span>
        </div>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>Дорога:</span> Часть пути (около 100
            км) проходит по бездорожью. Джипы надежные, но будьте готовы к
            настоящему приключению.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImportantInformation;
