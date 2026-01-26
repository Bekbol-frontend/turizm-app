import { TextType } from "@/shared/types/Text";
import { ReactNode } from "react";
import styles from "./Heading.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  children: ReactNode;
  type?: TextType;
  className?: string;
}

function Heading({ children, type = "large", className = "" }: IProps) {
  return (
    <h1
      className={clsx([styles.heading, className], {
        [styles[type]]: true,
      })}
    >
      {children}
    </h1>
  );
}

export default Heading;
