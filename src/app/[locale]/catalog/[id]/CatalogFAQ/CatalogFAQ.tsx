import { Container } from "@/shared/ui/Container";
import styles from "./CatalogFAQ.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { Accordion } from "@/shared/ui/Accordion";
import { IFAQ } from "@/entities/FAQ";

interface IProps {
  data: IFAQ[];
}

function CatalogFAQ({ data }: IProps) {
  return (
    <>
      <SectionTitle title="FAQ" />
      <section className={styles.section}>
        <Container>
          <div className={styles.accordionList}>
            {data.map((item) => (
              <Accordion data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default CatalogFAQ;
