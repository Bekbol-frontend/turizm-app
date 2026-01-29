"use client";

import { useMediaQuery } from "usehooks-ts";

export function useResponsive() {
  const mobile = useMediaQuery("(max-width: 850px)");

  return { mobile };
}
