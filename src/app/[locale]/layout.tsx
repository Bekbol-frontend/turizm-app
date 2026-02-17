import NextTopLoader from "nextjs-toploader";
import { Geist } from "next/font/google";
import { Header } from "@/widgets/Header";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/shared/config/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import "../styles/main.scss";
import { Footer } from "@/widgets/Footer";
import type { Metadata } from "next";
import { LANGS } from "@/shared/types/langs";
import { metaURL } from "@/shared/api";

const seoContent: Record<LANGS, any> = {
  en: {
    title: "Aral Sea Tours from Moynaq, Karakalpakstan | Discover the Aral Sea",
    description:
      "Travel to the legendary Aral Sea in Moynaq, Republic of Karakalpakstan. Explore the ship cemetery, vast Ustyurt Plateau, and dramatic desert landscapes with experienced local guides. Authentic cultural and adventure tours in Uzbekistan.",
  },

  ru: {
    title:
      "Туры на Аральское море из Муйнака, Каракалпакстан | Путешествие к Аралу",
    description:
      "Откройте для себя Аральское море в Муйнаке, Республика Каракалпакстан. Кладбище кораблей, плато Устюрт и бескрайние пустынные пейзажи ждут вас. Настоящие экспедиции с местными гидами по уникальным местам Узбекистана.",
  },

  uz: {
    title:
      "Moynaqdan Aral dengizi sayohatlari | Qoraqalpog‘istondagi noyob manzil",
    description:
      "Qoraqalpog‘iston Respublikasining Moynaq shahridan Aral dengiziga unutilmas sayohat qiling. Mashhur kemalar qabristoni, Ustyurt platosi va cheksiz cho‘l manzaralarini mahalliy tajribali gidlar bilan kashf eting. O‘zbekistondagi eng betakror sarguzasht yo‘nalishlaridan biri.",
  },

  kk: {
    title:
      "Moynaqtan Aral teńizi sayaxatları | Qaraqalpaqstandaǵı siyrek ushırasatuǵın mánzil",
    description:
      "Qaraqalpaqstan Respublikasınıń Moynaq qalasınan Aral teńizine umıtılmas sayaxat etiń. Belgili kemeler qoyımshılıǵı, Ústirt platosı hám sheksiz shól kórinislerin jergilikli tájiriybeli gidler menen ashıń. Ózbekstandaǵı eń biytákirar sarguzasht baǵdarlarınan biri.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: LANGS }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = seoContent[locale];

  const localeMap: Record<LANGS, string> = {
    en: "en",
    ru: "ru",
    uz: "uz",
    kk: "kk",
  };

  return {
    metadataBase: new URL(metaURL),

    title: t.title,
    description: t.description,

    alternates: {
      languages: {
        en: `${metaURL}/en`,
        ru: `${metaURL}/ru`,
        uz: `${metaURL}/uz`,
        kk: `${metaURL}/kk`,
      },
    },

    openGraph: {
      title: t.title,
      description: t.description,
      url: `${metaURL}/${locale}`,
      siteName: "Aral Sea Tour",
      locale: localeMap[locale],
      type: "website",
      images: [
        {
          url: `${metaURL}/catalog/bg.jpg`,
          width: 1200,
          height: 630,
          alt: "Aral Sea Tour Uzbekistan",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: [`${metaURL}/catalog/bg.jpg`],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

export default async function LocaleLayout({
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={geist.variable}>
        <NextTopLoader
          color="#2be5eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #0a6d71, 0 0px 5px #71eef2"
        />

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
