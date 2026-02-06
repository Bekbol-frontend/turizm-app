"use client";

import { Button } from "@/shared/ui/Button";
import styles from "./CategoryCatalog.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { useTranslations } from "next-intl";
export interface ICategory {
  id: number;
  name: string;
  sort_order: number;
  is_active: boolean;
}

interface IProps {
  data: ICategory[];
  onChangeCategory: (id: number | null) => void;
  typeCategory: number | null;
}

function CategoryCatalog({ data, onChangeCategory, typeCategory }: IProps) {
  const t = useTranslations("CategoryCatalog");

  return (
    <div className={styles.wrapper}>
      <Button
        className={clsx([styles.btn], {
          [styles.active]: typeCategory === null,
        })}
        onClick={() => onChangeCategory(null)}
      >
        {t("Все")}
      </Button>
      {data.map((el) => (
        <Button
          className={clsx([styles.btn], {
            [styles.active]: el.id === typeCategory,
          })}
          key={el.id}
          onClick={() => onChangeCategory(el.id)}
        >
          {el.name}
        </Button>
      ))}
    </div>
  );
}

export default CategoryCatalog;
