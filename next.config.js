/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
