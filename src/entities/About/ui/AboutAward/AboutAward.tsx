"use client";

import { useState } from "react";
import Image from "next/image";
import { IAboutAward } from "../../types";
import styles from "./AboutAward.module.scss";
import AwardModal from "../AwardModal/AwardModal";
import { imgUrl } from "@/shared/api";
import { Paragraph } from "@/shared/ui/Paragraph";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";

// Har bir rasimga random balandlik — album effekti
const HEIGHTS = [220, 280, 200, 260, 240, 300, 210, 270, 190, 250];

interface IProps {
  data: IAboutAward;
}

function AboutAward({ data }: IProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const t = useTranslations("About");

  const activeIndex = data.images.findIndex((img) => img.id === activeId);

  const handlePrev = () => {
    const prev = (activeIndex - 1 + data.images.length) % data.images.length;
    setActiveId(data.images[prev].id);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % data.images.length;
    setActiveId(data.images[next].id);
  };

  return (
    <>
      <div className={styles.block}>
        <Title className={styles.title}>{t("Award")}</Title>

        {data.description && (
          <Paragraph className={styles.description}>
            {data.description}
          </Paragraph>
        )}

        <div className={styles.masonry}>
          {data.images.map((item, index) => {
            const height = HEIGHTS[index % HEIGHTS.length];
            return (
              <div
                key={item.id}
                className={styles.card}
                style={{ height }}
                onClick={() => setActiveId(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(item.id)}
                aria-label={`View award ${item.id}`}
              >
                <Image
                  src={`${imgUrl}/${item.image_path}`}
                  alt={`Award ${item.id}`}
                  fill
                  sizes="(max-width: 600px) 45vw, 25vw"
                  style={{ objectFit: "contain" }}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11 8v6M8 11h6M20 20l-4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className={styles.accent} />
              </div>
            );
          })}
        </div>
      </div>

      <AwardModal
        images={data.images}
        imgUrl={imgUrl}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}

export default AboutAward;
