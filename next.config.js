/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverActions: {
    allowedOrigins: ['sendgrid.com']
  }
}

module.exports = nextConfig
