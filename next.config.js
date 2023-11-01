/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  webpack: (config) => {
    // Remove or adjust the externals configuration
    config.externals.push('lokijs', 'pino-pretty');

    // Return the modified config
    return config;
  },
}

module.exports = nextConfig
