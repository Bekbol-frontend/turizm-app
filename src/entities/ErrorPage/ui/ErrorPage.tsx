"use client";

import ErrorImage from "@/shared/assets/error/error.jpg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { PageBlock } from "@/shared/ui/PageBlock";
import { useCallback } from "react";

function ErrorPage() {
  const t = useTranslations("ErrorPage");
  const router = useRouter();

  const handleRefresh = useCallback(() => {
    router.refresh();
  }, [router]);

  return (
    <>
      <PageBlock
        imageUrl={ErrorImage}
        title={t("title")}
        desc={t("desc")}
        btnText={t("Refresh page")}
        onClick={handleRefresh}
      />
    </>
  );
}

export default ErrorPage;
