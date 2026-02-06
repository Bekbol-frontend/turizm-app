"use client";

import { InputHTMLAttributes } from "react";
import styles from "./InputPhone.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  className?: string;
  error?: boolean;
  onChange: (value: string) => void;
}

function InputPhone(props: IProps) {
  const {
    className = "",
    error = false,
    type = "text",
    onChange,
    ...otherProps
  } = props;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = rawValue.replace(/\D/g, "").slice(0, 9);

    onChange(formattedValue);
  };

  return (
    <div className={clsx([styles.wrapper, className])}>
      <div className={styles.inputBlock}>
        <span className={styles.spanStartNumber}>+998</span>
        <input
          className={clsx([styles.input], {
            [styles.errorInput]: error,
          })}
          type={type}
          {...otherProps}
          onChange={onChangeInput}
        />
      </div>
      {error && <span className={styles.errorSpan}>Заполните поле</span>}
    </div>
  );
}

export default InputPhone;
