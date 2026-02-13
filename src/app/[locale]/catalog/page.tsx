import { CatalogProducts } from "@/entities/CatalogProducts";
import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "CatalogSEO",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),

    metadataBase: new URL("https://aralseatour.uz"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://aralseatour.uz/${locale}/catalog`,
      siteName: "Aral Sea Tour",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const getBannerCatalog = async () => {
  return await API.get<IData<ISectionBanner>>("/categories/banner");
};

async function CatalogPage() {
  const res = await getBannerCatalog();

  return (
    <>
      <SectionBanner data={res.data.data} />
      <CatalogProducts />
      <FAQ />
      <ContactServer />
    </>
  );
}

export default CatalogPage;
