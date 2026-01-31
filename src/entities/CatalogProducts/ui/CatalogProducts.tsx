import { Container } from "@/shared/ui/Container";
import styles from "./CatalogProducts.module.scss";
import CategoryCatalog from "./CategoryCatalog/CategoryCatalog";
import { productItems } from "@/entities/PopularTours/productItems";
import { Product } from "@/entities/Product";

function CatalogProducts() {
  return (
    <section className={styles.section}>
      <Container>
        <CategoryCatalog />
        <div className={styles.products}>
          {productItems.map((el) => (
            <Product data={el} key={el.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CatalogProducts;
