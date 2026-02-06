"use client";

import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
  label?: string;
}

function Input(props: IProps) {
  const {
    className = "",
    error = false,
    label,
    type = "text",
    ...otherProps
  } = props;

  const t = useTranslations("Form");

  return (
    <div className={clsx([styles.wrapper, className])}>
      {label && (
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={clsx([styles.input], {
          [styles.errorInput]: error,
        })}
        type={type}
        {...otherProps}
        id={label}
      />
      {error && <span className={styles.errorSpan}>{t("Заполните поле")}</span>}
    </div>
  );
}

export default Input;
