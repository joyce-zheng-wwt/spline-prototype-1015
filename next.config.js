/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/spline-prototype-1015',
  assetPrefix: '/spline-prototype-1015',
  // Ensure trailing slash for better path handling
  trailingSlash: true,
};

module.exports = nextConfig;
