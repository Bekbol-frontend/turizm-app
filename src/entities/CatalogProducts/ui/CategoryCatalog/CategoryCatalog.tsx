import { Button } from "@/shared/ui/Button";
import styles from "./CategoryCatalog.module.scss";
import { clsx } from "@/shared/lib/clsx";

function CategoryCatalog() {
  return (
    <div className={styles.wrapper}>
      <Button className={clsx([styles.btn, styles.active])}>Все</Button>
      <Button className={styles.btn}>Однодневные</Button>
      <Button className={styles.btn}>Двухдневные</Button>
      <Button className={styles.btn}>Экстремальные</Button>
      <Button className={styles.btn}>Семейные</Button>
    </div>
  );
}

export default CategoryCatalog;
