"use client";

import { Container } from "@/shared/ui/Container";
import styles from "./Contact.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ContactSocial from "./ContactSocial/ContactSocial";
import { ContactMapComponent } from "./ContactMap";

function Contact() {
  return (
    <>
      <SectionTitle title="Contact" />
      <section className={styles.section}>
        <Container>
          <ContactSocial />
          <ContactMapComponent />
        </Container>
      </section>
    </>
  );
}

export default Contact;
