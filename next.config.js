/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
