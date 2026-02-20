/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Re-enabled for better code quality and security
    ignoreBuildErrors: false,
  },
  eslint: {
    // Re-enabled for better code quality and security
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://*.youtube.com https://*.ytimg.com https://*.google.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.doubleclick.net https://*.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.ytimg.com https://*.google.com https://*.vercel.app; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://*.youtube.com https://youtube.com; worker-src 'self' blob:; connect-src 'self' https://*.google-analytics.com;"
          },
          // Removed manual Cache-Control no-store to allow Next.js default caching strategy
        ],
      },
    ]
  },
}

export default nextConfig
