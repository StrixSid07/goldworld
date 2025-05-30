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
    optimizeCss: false,      // Disable CSS optimization in development
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  poweredByHeader: false,   // Remove X-Powered-By header for security
  reactStrictMode: true,    // Enable React strict mode for improved error detection
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  // Improve development performance
  webpack: (config, { dev, isServer }) => {
    // Only apply optimizations for client-side development builds
    if (dev && !isServer) {
      // Disable source maps in development
      config.devtool = false;
      
      // Replace React with preact in development
      // config.resolve.alias = {
      //   ...config.resolve.alias,
      //   'react': 'preact/compat',
      //   'react-dom/test-utils': 'preact/test-utils',
      //   'react-dom': 'preact/compat',
      // };
    }
    return config;
  },
  // Speed up development server
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 10 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 1,
  },
};

export default nextConfig; 