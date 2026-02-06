"use client";

import { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: boolean;
}

function Textarea(props: IProps) {
  const { className = "", error = false, ...otherProps } = props;

  return (
    <div className={clsx([styles.wrapper, className])}>
      <textarea
        className={clsx([styles.textarea], {
          [styles.errorTextarea]: error,
        })}
        {...otherProps}
      />
      {error && <span className={styles.errorSpan}>Заполните поле</span>}
    </div>
  );
}

export default Textarea;
