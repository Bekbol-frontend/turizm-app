"use client";
import { useState } from "react";
import styles from "./StarInput.module.scss";
import { useTranslations } from "next-intl";

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

function StarInput({ value, onChange }: IProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const t = useTranslations("CatalogReview");

  return (
    <div className={styles.block}>
      <label>{t("Rate")}</label>
      <div className={styles.starWrapper}>
        {Array(5)
          .fill(0)
          .map((_, i) => {
            const starValue = i + 1;
            const active = hoverValue
              ? starValue <= hoverValue
              : starValue <= value;

            return (
              <span
                key={i}
                className={`${styles.star} ${active ? styles.active : ""}`}
                onClick={() => onChange(starValue)}
                onMouseEnter={() => setHoverValue(starValue)}
                onMouseLeave={() => setHoverValue(null)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default StarInput;
