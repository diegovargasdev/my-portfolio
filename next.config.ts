import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  i18n: {
    locales: ['en', 'es'], // tus locales
    defaultLocale: 'en',
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;