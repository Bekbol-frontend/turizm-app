"use client";

import { useCallback, useEffect, useState } from "react";
import { IReview } from "@/entities/Reviews/types";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Container } from "@/shared/ui/Container";
import { PageLoading } from "@/shared/ui/PageLoading";
import { useLocale } from "next-intl";
import styles from "./ReviewsItems.module.scss";
import ReviewCard from "@/entities/Reviews/ui/ReviewCard/ReviewCard";
import { Empty } from "@/shared/ui/Empty";
import { Button } from "@/shared/ui/Button";
import ReloadIcon from "@/shared/assets/icons/loop-right-line.svg";
import Image from "next/image";

function ReviewsItems() {
  const [allData, setAllData] = useState<IReview[]>([]);
  const [displayedData, setDisplayedData] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const locale = useLocale();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await API.get<IData<IReview[]>>("/reviews", {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": locale,
          },
        });

        const fetchedData = res.data.data;
        setAllData(fetchedData);

        const halfLength = Math.ceil(fetchedData.length / 2);
        setDisplayedData(fetchedData.slice(0, halfLength));
        setShowAll(fetchedData.length <= halfLength);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [locale]);

  const handleLoadMore = useCallback(() => {
    setDisplayedData(allData);
    setShowAll(true);
  }, [allData]);

  if (loading) return <PageLoading />;

  return (
    <section className={styles.section}>
      <Container>
        {allData.length ? (
          <>
            <div className={styles.items}>
              {displayedData.map((el) => (
                <ReviewCard data={el} key={el.id} />
              ))}
            </div>
            <div className={styles.showAllBtn}>
              <Button
                variyant="secondary"
                onClick={handleLoadMore}
                style={{
                  opacity: showAll ? 0.7 : 1,
                  cursor: showAll ? "not-allowed" : "pointer",
                }}
                className={styles.btn}
              >
                <Image src={ReloadIcon} alt="reload" width={20} height={20} />{" "}
                Загрузить ещё
              </Button>
            </div>
          </>
        ) : (
          <Empty />
        )}
      </Container>
    </section>
  );
}

export default ReviewsItems;
