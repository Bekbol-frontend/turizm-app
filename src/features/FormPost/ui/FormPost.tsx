"use client";

import styles from "./FormPost.module.scss";
import { useCallback, useState } from "react";
import QuestionForm from "./QuestionForm/QuestionForm";
import BookingForm from "./BookingForm/BookingForm";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";

const tabItems = [
  { id: 1, title: "Вопрос" },
  { id: 2, title: "Бронирование" },
];

interface IProps {
  productId: number;
}

function FormPost({ productId }: IProps) {
  const [typeForm, setTypeForm] = useState<1 | 2>(1);
  const t = useTranslations("Form");

  const onChangeTypeForm = useCallback((val: 1 | 2) => {
    setTypeForm(val);
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.top}>
        {tabItems.map((el) => (
          <span
            key={el.id}
            className={clsx([styles.tabSpan], {
              [styles.active]: typeForm === el.id,
            })}
            onClick={() => onChangeTypeForm(el.id as 1 | 2)}
          >
            {t(el.title)}
          </span>
        ))}
      </div>
      <div>
        {typeForm === 1 ? (
          <QuestionForm productId={productId} />
        ) : (
          <BookingForm productId={productId} />
        )}
      </div>
    </div>
  );
}

export default FormPost;
