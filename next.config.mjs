/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ]
  },
}

export default nextConfig
