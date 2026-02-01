"use client";

import { Container } from "@/shared/ui/Container";
import styles from "./Contact.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ContactSocial from "./ContactSocial/ContactSocial";
import { ContactMapComponent } from "./ContactMap";
import { IContact } from "../types";

interface IProps {
  data: IContact;
}

function Contact({ data }: IProps) {
  return (
    <>
      <SectionTitle title="Contact" />
      <section className={styles.section}>
        <Container>
          <ContactSocial data={data} />
          <ContactMapComponent
            latitude={+data.latitude}
            longitude={+data.longitude}
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
