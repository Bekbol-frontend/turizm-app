"use client";

import Image from "next/image";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { clsx } from "@/shared/lib/clsx";
import { Button } from "@/shared/ui/Button";
import { useResponsive } from "@/shared/lib/useResponsive";
import styles from "./PageBlock.module.scss";

interface IProps {
  imageUrl: any;
  mainTitle?: string;
  title: string;
  desc: string;
  btnText: string;
  onClick: () => void;
}

function PageBlock(props: IProps) {
  const { imageUrl, mainTitle, title, desc, btnText, onClick } = props;
  const { mobile } = useResponsive();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imgBlock}>
          <Image src={imageUrl} alt={title} width={250} height={250} />
        </div>
        <div className={styles.textBlock}>
          {mainTitle && (
            <Title
              type={mobile ? "small" : "large"}
              className={styles.titleColor}
            >
              {mainTitle}
            </Title>
          )}
          <Title
            type={mobile ? "small" : "large"}
            className={clsx([styles.title, styles.titleColor])}
          >
            {title}
          </Title>
          <Paragraph type="medium" className={styles.desc}>
            {desc}
          </Paragraph>
          <Button variyant="secondary" onClick={onClick}>
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PageBlock;
