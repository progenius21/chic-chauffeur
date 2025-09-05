/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests for network access - TOP LEVEL CONFIG
  allowedDevOrigins: ["192.168.1.181"],
  // Disable fast refresh over network to prevent caching issues
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
