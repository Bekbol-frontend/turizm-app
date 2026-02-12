import { API } from "@/shared/api";
import Contact from "./Contact";
import { IData } from "@/shared/types/data";
import { IContact } from "../types";
import { getLocale } from "next-intl/server";
import { IRouteProduct } from "@/entities/Product";

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
  route?: IRouteProduct[];
}

async function ContactServer({ detailRoute, route }: IProps) {
  const locale = await getLocale();
  const res = await getContactData(locale);

  return (
    <Contact data={res.data.data} detailRoute={detailRoute} route={route} />
  );
}

export default ContactServer;
