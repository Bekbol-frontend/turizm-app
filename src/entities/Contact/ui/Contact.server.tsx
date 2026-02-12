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

interface IProps {
  detailRoute?: boolean;
}

async function ContactServer({ detailRoute }: IProps) {
  const locale = await getLocale();
  const res = await getContactData(locale);

  return <Contact data={res.data.data} detailRoute={detailRoute} />;
}

export default ContactServer;
