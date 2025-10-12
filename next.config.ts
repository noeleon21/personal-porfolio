/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/personal-porfolio',
  assetPrefix: '/personal-porfolio/',
};

module.exports = nextConfig;
