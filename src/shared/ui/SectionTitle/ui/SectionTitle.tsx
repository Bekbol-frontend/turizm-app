"use client";

import { useResponsive } from "@/shared/lib/useResponsive";
import { Title } from "../../Title";
import { Heading } from "../../Heading";
import styles from "./SectionTitle.module.scss";

interface IProps {
  title: string;
}

function SectionTitle({ title }: IProps) {
  const { mobile } = useResponsive();

  return (
    <section className={styles.section}>
      {mobile ? (
        <Title type="small">{title}</Title>
      ) : (
        <Heading type="small">{title}</Heading>
      )}
    </section>
  );
}

export default SectionTitle;
