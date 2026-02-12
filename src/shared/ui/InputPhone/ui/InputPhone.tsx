"use client";

import { InputHTMLAttributes } from "react";
import styles from "./InputPhone.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";

interface IProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  className?: string;
  label: string;
  error?: boolean;
  onChange: (value: string) => void;
}

function InputPhone(props: IProps) {
  const {
    className = "",
    label,
    error = false,
    type = "text",
    onChange,
    ...otherProps
  } = props;

  const t = useTranslations("Form");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = rawValue.replace(/\D/g, "").slice(0, 9);

    onChange(formattedValue);
  };

  return (
    <div className={clsx([styles.wrapper, className])}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputBlock}>
        <input
          className={clsx([styles.input], {
            [styles.errorInput]: error,
          })}
          type={type}
          {...otherProps}
          onChange={onChangeInput}
          id={label}
        />
      </div>
      {error && <span className={styles.errorSpan}>{t("Заполните поле")}</span>}
    </div>
  );
}

export default InputPhone;
