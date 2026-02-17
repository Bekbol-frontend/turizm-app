import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aralseatour.uz"),
};

export const viewport: Viewport = {
  themeColor: "#2be5eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
