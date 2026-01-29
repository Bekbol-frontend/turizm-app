import { Container } from "@/shared/ui/Container";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ReviewsSwiper from "./ReviewsSwiper/ReviewsSwiper";
import styles from "./Reviews.module.scss";

function Reviews() {
  return (
    <>
      <SectionTitle title="Reviews" />
      <section className={styles.section}>
        <Container>
          <ReviewsSwiper />
        </Container>
      </section>
    </>
  );
}

export default Reviews;
