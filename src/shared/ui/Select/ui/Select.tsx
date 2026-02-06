"use client";

import { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";
import { IOption } from "../types";
import { label } from "framer-motion/client";

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label: string;
  error?: boolean;
  loading?: boolean;
  options: IOption[];
}

function Select(props: IProps) {
  const {
    className = "",
    label,
    error = false,
    loading,
    options,
    ...otherProps
  } = props;

  const t = useTranslations("Form");

  return (
    <div className={clsx([styles.wrapper, className])}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <select
        className={clsx([styles.select], {
          [styles.errorSelect]: error,
        })}
        {...otherProps}
      >
        {options.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      {loading && <span className={styles.loadingSpan}>{t("Загрузка")}</span>}
      {error && <span className={styles.errorSpan}>{t("Заполните поле")}</span>}
    </div>
  );
}

export default Select;
