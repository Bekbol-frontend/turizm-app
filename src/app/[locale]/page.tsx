import { Label } from "@/shared/ui/Label";
import { useTranslations } from "next-intl";

function HomePage() {
  const t = useTranslations("Home");

  return (
    <div>
      <Label type="large">{t("title")}</Label>
    </div>
  );
}

export default HomePage;
