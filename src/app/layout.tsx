import { metaURL } from "@/shared/api";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(metaURL),
};

export const viewport: Viewport = {
  themeColor: "#f6e56b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
