import { Container } from "@/shared/ui/Container";
import styles from "./CatalogFAQ.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { IProductFAQ } from "@/entities/Product";
import { ProductAccordion } from "@/shared/ui/ProductAccordion";

interface IProps {
  data: IProductFAQ[];
}

function CatalogFAQ({ data }: IProps) {
  return (
    <>
      <SectionTitle title="FAQ" />
      <section className={styles.section}>
        <Container>
          <div className={styles.accordionList}>
            {data.map((faqSection, index) => (
              <ProductAccordion key={index} data={faqSection} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default CatalogFAQ;
