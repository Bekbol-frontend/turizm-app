import { Container } from "@/shared/ui/Container";
import styles from "./CatalogProducts.module.scss";
import CategoryCatalog from "./CategoryCatalog/CategoryCatalog";
import { productItems } from "@/entities/PopularTours/productItems";
import { Product } from "@/entities/Product";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import LoopIcon from "@/shared/assets/icons/loop-right-line.svg";

function CatalogProducts() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <CategoryCatalog />
        <div className={styles.products}>
          {productItems.map((el) => (
            <Product data={el} key={el.id} />
          ))}
        </div>
        <Button variyant="secondary" className={styles.loopBtn}>
          <span>
            <Image src={LoopIcon} alt="turizm loop" width={16} height={16} />
          </span>
          Загрузить ещё
        </Button>
      </Container>
    </section>
  );
}

export default CatalogProducts;
