import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { getLocale } from "next-intl/server";

const getBannerContact = async (lang: string) => {
  return await API.get<IData<ISectionBanner>>("/contact/banner", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function ContactsPage() {
  const locale = await getLocale();
  const res = await getBannerContact(locale);

  return (
    <>
      <SectionBanner data={res.data.data} />
      <ContactServer />
      <FAQ />
    </>
  );
}

export default ContactsPage;
