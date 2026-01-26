"use client";

import { clsx } from "@/shared/lib/clsx";
import styles from "./Button.module.scss";

type VariyantBtn = "primary" | "secondary";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variyant?: VariyantBtn;
}

function Button(props: IProps) {
  const {
    children,
    variyant = "primary",
    className = "",
    ...otherProps
  } = props;

  return (
    <button
      className={clsx([styles.btn, className], {
        [styles[variyant]]: true,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
