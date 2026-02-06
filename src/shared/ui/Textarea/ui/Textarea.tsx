"use client";

import { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
  error?: boolean;
}

function Textarea(props: IProps) {
  const { className = "", label, error = false, ...otherProps } = props;

  const t = useTranslations("Form");

  return (
    <div className={clsx([styles.wrapper, className])}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <textarea
        id={label}
        className={clsx([styles.textarea], {
          [styles.errorTextarea]: error,
        })}
        {...otherProps}
      />
      {error && <span className={styles.errorSpan}>{t("Заполните поле")}</span>}
    </div>
  );
}

export default Textarea;
