/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  // i18n: {
  //   locales: ["vi", "en"],
  //   defaultLocale: "vi",
  // },
  images: {
    domains: [""],
  },
};

module.exports = nextConfig;
