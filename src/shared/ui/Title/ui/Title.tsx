import { TextType } from "@/shared/types/Text";
import { ReactNode } from "react";
import styles from "./Title.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  type?: TextType;
  className?: string;
}

function Title({ children, type = "large", className = "" }: IProps) {
  return (
    <h2
      className={clsx([styles.title, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h2>
  );
}

export default Title;
