import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/shared/config/i18n/request.ts",
);

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "toqtarbay.dbc.uz",
        port: "",
        pathname: "/api/uploads/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
