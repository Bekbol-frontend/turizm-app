import { Product } from "@/entities/Product";
import { Container } from "@/shared/ui/Container";
import styles from "./PopularTours.module.scss";
import { productItems } from "../productItems";

function PopularTours() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.products}>
          {productItems.map((el) => (
            <Product data={el} key={el.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PopularTours;
