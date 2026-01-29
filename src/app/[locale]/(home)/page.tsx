import { About } from "@/entities/About";
import { Banner } from "@/entities/Banner";
import { PopularTours } from "@/entities/PopularTours";
import { Reviews } from "@/entities/Reviews";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { useTranslations } from "next-intl";

function HomePage() {
  const t = useTranslations("Home");

  return (
    <>
      <Banner />
      <SectionTitle title={t("Popular tours")} />
      <PopularTours />
      <About />
      <Reviews />
    </>
  );
}

export default HomePage;
