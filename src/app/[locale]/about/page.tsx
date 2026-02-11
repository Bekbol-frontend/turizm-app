import { About } from "@/entities/About";
import { Contact, ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutSEO",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),

    metadataBase: new URL("https://aralseatour.uz"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://aralseatour.uz/${locale}/about`,
      siteName: "Aral Sea Tour",
      type: "article",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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
