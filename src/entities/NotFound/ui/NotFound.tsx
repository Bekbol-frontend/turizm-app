"use client";

import ImgNotFound from "@/shared/assets/404-images/404.jpg";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/shared/config/routeConfig";
import { useTranslations } from "next-intl";
import { PageBlock } from "@/shared/ui/PageBlock";
import { useCallback } from "react";

function NotFound() {
  const router = useRouter();
  const t = useTranslations("NotFound");

  const goToHome = useCallback(() => {
    router.push(appRoutes.home);
  }, [router]);

  return (
    <>
      <PageBlock
        imageUrl={ImgNotFound}
        mainTitle="404."
        title={t("It seems you took a wrong turn")}
        desc={t(
          "This page was lost in the sands of Karakalpakstan or was just a mirage",
        )}
        btnText={t("Return to home")}
        onClick={goToHome}
      />
    </>
  );
}

export default NotFound;
