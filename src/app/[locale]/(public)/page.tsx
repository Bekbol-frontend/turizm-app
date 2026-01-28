import { Banner } from "@/entities/Banner";
import { PopularToursTitle } from "@/entities/PopularToursTitle";
import { PopularTours } from "@/entities/PopularTours";
import { useTranslations } from "next-intl";

function HomePage() {
  const t = useTranslations("Home");

  return (
    <>
      <Banner />
      <PopularToursTitle />
      <PopularTours />
    </>
  );
}

export default HomePage;
