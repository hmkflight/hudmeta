import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { qualities: [75, 85] },
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
};
export default nextConfig;
