"use client";

import { Container } from "@/shared/ui/Container";
import styles from "./CatalogDetail.module.scss";
import { IProduct } from "@/entities/Product";
import { Title } from "@/shared/ui/Title";
import CatalogSwiperDetail from "./CatalogSwiperDetail/CatalogSwiperDetail";
import CatalogDetailInfo from "./CatalogDetailInfo/CatalogDetailInfo";
import { useResponsive } from "@/shared/lib/useResponsive";
import TourProgram from "./TourProgram/TourProgram";
import ThePriseCatalog from "./ThePriseCatalog/ThePriseCatalog";
import ImportantInformation from "./ImportantInformation/ImportantInformation";
import CatalogFAQ from "@/app/[locale]/catalog/[id]/CatalogFAQ/CatalogFAQ";
import CatalogTopLink from "@/app/[locale]/catalog/[id]/CatalogTopLink/CatalogTopLink";

interface IProps {
  tour: IProduct;
}

function CatalogDetail({ tour }: IProps) {
  const { mobile } = useResponsive();

  return (
    <>
      <section className={styles.section}>
        <Container>
          <CatalogTopLink title={tour.title} />
          <div className={styles.content}>
            <Title
              type={mobile ? "small" : "medium"}
              className={styles.mainTitle}
            >
              {tour.title}
            </Title>

            <div className={styles.block}>
              <CatalogSwiperDetail data={tour} />
              <CatalogDetailInfo data={tour} />
              <TourProgram data={tour} />
              <ThePriseCatalog data={tour} />
              <ImportantInformation />
            </div>
          </div>
        </Container>
      </section>
      {tour.faqs.length ? <CatalogFAQ data={tour.faqs} /> : null}
    </>
  );
}

export default CatalogDetail;
