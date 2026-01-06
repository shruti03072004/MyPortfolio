/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  images: {
    domains: ['images.unsplash.com', 'commondatastorage.googleapis.com'],
    unoptimized: true,
  },
};

export default nextConfig;