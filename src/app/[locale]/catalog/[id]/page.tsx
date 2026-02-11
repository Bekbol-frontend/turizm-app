import { CatalogDetail } from "@/entities/CatalogDetail";
import { ContactServer } from "@/entities/Contact";
import { IProduct } from "@/entities/Product";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ id: string }>;
}

const getTourById = async (id: string, locale: string) => {
  return await API.get<IData<IProduct>>(`/tours/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();

  const tour = await getTourById(id, locale);
  const {
    data: {
      data: { title, description, slogan, main_image },
    },
  } = tour;

  if (!tour.data.data) {
    return {
      title: "Tour not found",
      robots: { index: false, follow: false },
    };
  }

  const descSEO = slogan || description.slice(0, 160);

  return {
    title: `${title} | Aral Sea Tour`,
    description: descSEO,

    keywords: [title, "Aral Sea tour", "Muynak tour", "Uzbekistan travel"],

    metadataBase: new URL("https://aralseatour.uz"),

    openGraph: {
      title,
      description,
      url: `https://aralseatour.uz/${locale}/catalog/${id}`,
      images: [
        {
          url: main_image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

async function CatalogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const res = await getTourById(id, locale);

  return (
    <>
      <CatalogDetail tour={res.data.data} />
      <ContactServer />
    </>
  );
}

export default CatalogDetailPage;
