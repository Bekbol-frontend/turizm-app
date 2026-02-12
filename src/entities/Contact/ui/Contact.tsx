"use client";

import { Container } from "@/shared/ui/Container";
import styles from "./Contact.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ContactSocial from "./ContactSocial/ContactSocial";
import { ContactMapComponent } from "./ContactMap";
import { IContact } from "../types";
import { useTranslations } from "next-intl";
import { IRouteProduct } from "@/entities/Product";

interface IProps {
  data: IContact;
  detailRoute?: boolean;
  route?: IRouteProduct[];
}

function Contact({ data, detailRoute, route }: IProps) {
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
            route={route}
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
