import { Geist } from "next/font/google";
import { Header } from "@/widgets/Header";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/shared/config/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import "../styles/main.scss";
import { Footer } from "@/widgets/Footer";

export const metadata = {
  title: "Toktarbay aga tours",
  description: "Toktarbay aga tours",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={geist.variable}>
        <NextIntlClientProvider messages={messages}>
          <div id="wrapper-block-page">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
