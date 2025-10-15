/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/greentally',
  assetPrefix: '/greentally',
  // Ensure trailing slash for better path handling
  trailingSlash: true,
};

module.exports = nextConfig;
