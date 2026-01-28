import { Banner } from "@/entities/Banner";
import { useTranslations } from "next-intl";

function HomePage() {
  const t = useTranslations("Home");

  return (
    <>
      <Banner />
    </>
  );
}

export default HomePage;
