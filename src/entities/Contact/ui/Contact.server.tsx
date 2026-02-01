import { API } from "@/shared/api";
import Contact from "./Contact";
import { IData } from "@/shared/types/data";
import { IContact } from "../types";
import { getLocale } from "next-intl/server";

const getContactData = async (lang: string) => {
  return await API.get<IData<IContact>>("/contact", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function ContactServer() {
  const locale = await getLocale();
  const res = await getContactData(locale);

  return <Contact data={res.data.data} />;
}

export default ContactServer;
