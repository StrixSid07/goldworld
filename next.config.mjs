/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['source.unsplash.com', 'img.freepik.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,      // Enable CSS optimization
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  poweredByHeader: false,   // Remove X-Powered-By header for security
  reactStrictMode: true,    // Enable React strict mode for improved error detection
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig; 