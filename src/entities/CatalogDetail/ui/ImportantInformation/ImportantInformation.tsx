"use client";

import { Title } from "@/shared/ui/Title";
import styles from "./ImportantInformation.module.scss";
import { useTranslations } from "next-intl";
import DOMPurify from "dompurify";

interface IProps {
  important_info: string;
}

function ImportantInformation({ important_info }: IProps) {
  const t = useTranslations("Product");

  const cleanHtml = DOMPurify.sanitize(important_info);

  return (
    <div className={styles.block}>
      <Title type="medium" className={styles.mainTitle}>
        {t("Important information")}
      </Title>
      <div className={styles.textBlockWrapper}>
        <div
          className={styles.importantInfo}
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      </div>
    </div>
  );
}

export default ImportantInformation;
