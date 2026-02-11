import { CatalogDetail } from "@/entities/CatalogDetail";
import { IProduct } from "@/entities/Product";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { getLocale } from "next-intl/server";

const getTourById = async (id: string, locale: string) => {
  return await API.get<IData<IProduct>>(`/tours/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });
};

async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getLocale();
  const res = await getTourById(id, locale);

  return (
    <div>
      <CatalogDetail tour={res.data.data} />
    </div>
  );
}

export default CatalogDetailPage;
