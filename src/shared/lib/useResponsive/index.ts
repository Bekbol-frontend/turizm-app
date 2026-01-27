import { useEffect, useState } from "react";

export function useResponsive() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function resizeWindow() {
      if (window.innerWidth < 550) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return { mobile };
}
