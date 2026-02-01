import { CatalogBanner } from "@/entities/CatalogBanner";
import { CatalogProducts } from "@/entities/CatalogProducts";
import { ContactServer } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";

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
