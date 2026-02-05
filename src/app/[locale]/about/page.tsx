import { About } from "@/entities/About";
import { Contact, ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { getLocale } from "next-intl/server";

const getAboutBanner = async (lang: string) => {
  return await API.get<IData<ISectionBanner>>("/about/banner", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function AboutPage() {
  const locale = await getLocale();
  const res = await getAboutBanner(locale);

  return (
    <>
      <SectionBanner data={res.data.data} />
      <About />
      <FAQ />
      <ContactServer />
    </>
  );
}

export default AboutPage;
