/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/growmytherapy-assignment' : '',
  assetPrefix: isProd ? '/growmytherapy-assignment/' : '',
};


module.exports = nextConfig;
