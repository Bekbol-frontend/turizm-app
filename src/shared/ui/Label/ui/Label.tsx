import { TextType } from "@/shared/types/Text";
import { ReactNode } from "react";
import styles from "./Label.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  type?: TextType;
  className?: string;
}

function Label({ children, type = "large", className = "" }: IProps) {
  return (
    <h1
      className={clsx([styles.label, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h1>
  );
}

export default Label;
