// next.config.mjs
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add alias for Bootstrap
    config.resolve.alias['bootstrap'] = path.resolve('node_modules/bootstrap');

    // Return the updated config
    return config;
  },
};

export default nextConfig;
