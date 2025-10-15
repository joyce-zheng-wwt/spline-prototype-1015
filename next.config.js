/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set this if deploying to a repository (e.g., username.github.io/repo-name)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
  basePath: '/greentally',
assetPrefix: '/greentally',
};

module.exports = nextConfig;
