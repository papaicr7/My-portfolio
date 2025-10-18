import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
