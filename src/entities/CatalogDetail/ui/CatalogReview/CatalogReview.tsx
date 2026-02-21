"use client";
import { Title } from "@/shared/ui/Title";
import styles from "./CatalogReview.module.scss";
import { Button } from "@/shared/ui/Button";
import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import CatalogReviewForm from "../CatalogReviewForm/CatalogReviewForm";
import { IProduct } from "@/entities/Product";
import { useTranslations } from "next-intl";
import CatalogReviewSwiper from "../CatalogReviewSwiper/CatalogReviewSwiper";

interface IProps {
  data: IProduct;
}

function CatalogReview({ data }: IProps) {
  const [modal, setModal] = useState(false);
  const t = useTranslations("CatalogReview");

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <div className={styles.block}>
        <div className={styles.top}>
          <Title>{t("What memories did this trip leave you with")}</Title>
          <Button variyant="secondary" onClick={onShowModal}>
            {t("Write a review")}
          </Button>
        </div>

        <CatalogReviewSwiper data={data.reviews} />
      </div>

      <Modal title="Sharh yozish" isOpen={modal} onClose={onCloseModal}>
        <CatalogReviewForm tour_id={data.id} />
      </Modal>
    </>
  );
}

export default CatalogReview;
