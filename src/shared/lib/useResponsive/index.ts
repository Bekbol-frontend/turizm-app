import { useEffect, useState } from "react";

export function useResponsive() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function resizeWindow() {
      if (window.innerWidth > 850) {
        setMobile(false);
      } else {
        setMobile(true);
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
