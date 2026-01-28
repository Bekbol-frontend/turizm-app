"use client";
import { Heading } from "@/shared/ui/Heading";
import styles from "./PopularToursTitle.module.scss";
import { useTranslations } from "next-intl";
import { useResponsive } from "@/shared/lib/useResponsive";
import { Title } from "@/shared/ui/Title";

function PopularToursTitle() {
  const t = useTranslations("Home");
  const { mobile } = useResponsive();

  return (
    <section className={styles.section}>
      {mobile ? (
        <Title type="small">{t("Popular tours")}</Title>
      ) : (
        <Heading type="small">{t("Popular tours")}</Heading>
      )}
    </section>
  );
}

export default PopularToursTitle;
