import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  // metadataBase: new URL("https://aralseatour.uz"), test bunga etibor bermang!
  metadataBase: new URL("https://aralseatour.webclub.uz"),
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
