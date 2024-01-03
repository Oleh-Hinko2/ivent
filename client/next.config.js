/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en-US", "ua"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
