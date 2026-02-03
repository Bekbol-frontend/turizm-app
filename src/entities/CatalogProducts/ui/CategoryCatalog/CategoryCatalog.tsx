import { Button } from "@/shared/ui/Button";
import styles from "./CategoryCatalog.module.scss";
import { clsx } from "@/shared/lib/clsx";
export interface ICategory {
  id: number;
  name: string;
  sort_order: number;
  is_active: boolean;
}

interface IProps {
  data: ICategory[];
  onChangeCategory: (id: number) => void;
  typeCategory: number;
}

function CategoryCatalog({ data, onChangeCategory, typeCategory }: IProps) {
  return (
    <div className={styles.wrapper}>
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
