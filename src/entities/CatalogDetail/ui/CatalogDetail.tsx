"use client";

import { Container } from "@/shared/ui/Container";
import { useParams } from "next/navigation";
import styles from "./CatalogDetail.module.scss";
import { useEffect, useState } from "react";
import { IProduct } from "@/entities/Product";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { PageLoading } from "@/shared/ui/PageLoading";
import { Title } from "@/shared/ui/Title";
import { Empty } from "@/shared/ui/Empty";
import CatalogSwiperDetail from "./CatalogSwiperDetail/CatalogSwiperDetail";
import CatalogDetailInfo from "./CatalogDetailInfo/CatalogDetailInfo";
import { useResponsive } from "@/shared/lib/useResponsive";
import TourProgram from "./TourProgram/TourProgram";
import { useLocale } from "next-intl";
import ThePriceInCatalog from "./ThePriceInCatalog/ThePriceInCatalog";

function CatalogDetail() {
  const params = useParams();
  const { id } = params;
  const locale = useLocale();
  const { mobile } = useResponsive();

  const [tour, setTour] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTour = async () => {
      try {
        setLoading(true);
        const res = await API.get<IData<IProduct>>("/tours/" + id, {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
        });
        setTour(res.data.data);
      } catch (error) {
        setTour(null);
      } finally {
        setLoading(false);
      }
    };

    getTour();
  }, [id, locale]);

  if (loading) {
    return <PageLoading />;
  }

  if (!tour) {
    return (
      <section className={styles.section}>
        <Container>
          <Empty />
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <Title
            type={mobile ? "small" : "medium"}
            className={styles.mainTitle}
          >
            {tour.title}
          </Title>

          <div className={styles.block}>
            <CatalogSwiperDetail />
            <CatalogDetailInfo data={tour} />
            <TourProgram data={tour} />
            <ThePriceInCatalog data={tour} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CatalogDetail;
