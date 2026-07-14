/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (next export was removed in Next.js 13+).
  // Keep this gated so Vercel can still run API routes like /api/contact.
  ...(process.env.GITHUB_PAGES === 'true'
    ? {
        output: 'export',
        images: { unoptimized: true },
      }
    : {}),
  // Avoid a mid-request webpack rebuild invalidating the first client
  // bundles before React can hydrate (common on cold `next dev` starts).
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Keep the first compiled client graph stable while the browser hydrates.
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
      };
    }

    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
