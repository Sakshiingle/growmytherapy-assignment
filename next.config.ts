/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/growmytherapy-assignment',
  assetPrefix: '/growmytherapy-assignment/',
};

module.exports = nextConfig;
