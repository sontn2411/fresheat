import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['gramentheme.com', 'i.pinimg.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gramentheme.com',
      },
    ],
  },
}

export default nextConfig
