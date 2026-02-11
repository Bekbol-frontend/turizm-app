import { CatalogBanner } from "@/entities/CatalogBanner";
import { CatalogProducts } from "@/entities/CatalogProducts";
import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
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

function CatalogPage() {
  return (
    <>
      <CatalogBanner />
      <CatalogProducts />
      <FAQ />
      <ContactServer />
    </>
  );
}

export default CatalogPage;
