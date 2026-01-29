import { Container } from "@/shared/ui/Container";
import styles from "./About.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";

function About() {
  return (
    <>
      <SectionTitle title={"About"} />
      <section className={styles.section}>
        <Container>about</Container>
      </section>
    </>
  );
}

export default About;
