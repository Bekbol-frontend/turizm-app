"use client";

import { Container } from "@/shared/ui/Container";
import styles from "./Contact.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ContactSocial from "./ContactSocial/ContactSocial";
import { ContactMapComponent } from "./ContactMap";
import { IContact } from "../types";
import { useTranslations } from "next-intl";

interface IProps {
  data: IContact;
  detailRoute?: boolean;
}

function Contact({ data, detailRoute }: IProps) {
  const t = useTranslations("Contact");

  return (
    <>
      <SectionTitle title={t("Contact")} />
      <section className={styles.section}>
        <Container>
          <ContactSocial data={data} />
          <ContactMapComponent
            latitude={+data.latitude}
            longitude={+data.longitude}
            detailRoute={detailRoute}
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
