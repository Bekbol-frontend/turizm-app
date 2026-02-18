"use client";

import { IProduct } from "@/entities/Product";
import styles from "./TourProgram.module.scss";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { useMemo, useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";
import CatalogAccommodation from "../CatalogAccommodation/CatalogAccommodation";

interface IProps {
  data: IProduct;
}

function TourProgram({ data }: IProps) {
  const { duration_days, itineraries } = data;
  const t = useTranslations("Product");

  const [activeTab, setActiveTab] = useState(1);
  const daysArray = Array.from({ length: duration_days }, (_, i) => i + 1);

  const itinerariesByDay = useMemo(() => {
    return itineraries.filter((el) => el.day_number === activeTab);
  }, [activeTab, itineraries]);

  return (
    <div className={styles.block}>
      <Title type="medium" className={styles.mainTitle}>
        {t("Tour program")}
      </Title>

      <div className={styles.tabBlock}>
        <div className={styles.tabHeader}>
          {daysArray.map((day) => (
            <span
              key={day}
              className={clsx([styles.span], {
                [styles.active]: activeTab === day,
              })}
              onClick={() => setActiveTab(day)}
            >
              <Paragraph type="small">
                {t("day")} {day}
              </Paragraph>
            </span>
          ))}
        </div>
        <div className={styles.tabBody}>
          {itinerariesByDay.map((el, index) => (
            <div key={index} className={styles.tabItem}>
              <span className={styles.eventTime}>
                {el.event_time.slice(0, 5)}
              </span>
              <div>
                <Paragraph type="small" className={styles.activityTitle}>
                  {el.activity_title}
                </Paragraph>
                <Paragraph type="medium" className={styles.activityDescription}>
                  {el.activity_description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CatalogAccommodation activeTab={activeTab} data={data.accommodations} />
    </div>
  );
}

export default TourProgram;
