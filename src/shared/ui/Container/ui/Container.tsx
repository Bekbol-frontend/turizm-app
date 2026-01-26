import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface IProps {
  children: ReactNode;
}

function Container(props: IProps) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

export default Container;
