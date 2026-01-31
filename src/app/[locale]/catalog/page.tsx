import { CatalogBanner } from "@/entities/CatalogBanner";
import { CatalogProducts } from "@/entities/CatalogProducts";

function CatalogPage() {
  return (
    <>
      <CatalogBanner />
      <CatalogProducts />
    </>
  );
}

export default CatalogPage;
