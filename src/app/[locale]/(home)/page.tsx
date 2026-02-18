import { About } from "@/entities/About";
import { Banner } from "@/entities/Banner";
import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { PopularTours } from "@/entities/PopularTours";
import { Reviews } from "@/entities/Reviews";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { metaURL } from "@/shared/api";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "HomeSEO",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),

    metadataBase: new URL(metaURL),

    robots: {
      index: true,
      follow: true,
    },
  };
}

function HomePage() {
  const t = useTranslations("Home");

  return (
    <>
      <Banner />
      <SectionTitle title={t("Popular tours")} />
      <PopularTours />
      <About />
      <Reviews />
      <FAQ />
      <ContactServer />
    </>
  );
}

export default HomePage;
