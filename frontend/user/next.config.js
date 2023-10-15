/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  images: {
    unoptimized: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
