"use client";

import { useEffect, useState } from "react";

export function useResponsive(breakpoint: number = 850) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return { mobile };
}
