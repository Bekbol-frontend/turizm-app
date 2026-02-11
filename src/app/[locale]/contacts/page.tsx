import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactSEO",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),

    metadataBase: new URL("https://aralseatour.uz"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://aralseatour.uz/${locale}/contact`,
      siteName: "Aral Sea Tour",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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
