/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'style.js'],
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
