"use client";

import { Title } from "@/shared/ui/Title";
import styles from "./ImportantInformation.module.scss";
import { useTranslations } from "next-intl";

function ImportantInformation() {
  const t = useTranslations("Product");

  return (
    <div className={styles.block}>
      <Title type="medium" className={styles.mainTitle}>
        {t("Important information")}
      </Title>
      <div className={styles.textBlockWrapper}>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>{t("Cloth")}</span>{" "}
            {t(
              "Be sure to wear comfortable closed-toe shoes (sneakers) a hat and sunglasses It can get chilly in the desert at night so bring a warm sweater or windbreaker",
            )}
          </span>
        </div>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>{t("Connection")}</span>{" "}
            {t("Theres")}
          </span>
        </div>
        <div className={styles.textInfoBlock}>
          <span className={styles.desc}>
            <span className={styles.title}>{t("Road")}</span>{" "}
            {t(
              "Part of the route (about 100 km) is off-road The jeeps are reliable but be prepared for a real adventure",
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImportantInformation;
