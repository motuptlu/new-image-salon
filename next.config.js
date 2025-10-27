/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com', 'maps.googleapis.com']
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
