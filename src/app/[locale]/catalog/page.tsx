import { CatalogBanner } from "@/entities/CatalogBanner";
import { CatalogProducts } from "@/entities/CatalogProducts";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";

function CatalogPage() {
  return (
    <>
      <CatalogBanner />
      <CatalogProducts />
      <FAQ />
      {/* <Contact /> */}
    </>
  );
}

export default CatalogPage;
