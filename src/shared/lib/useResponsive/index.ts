import { useEffect, useState } from "react";

export function useResponsive() {
  const [mobile, setMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 850;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    function resizeWindow() {
      setMobile(window.innerWidth <= 850);
    }

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return { mobile };
}
