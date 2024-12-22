import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odouepjkxheu5esn.public.blob.vercel-storage.com",
        port: "",
        pathname: "/vgseven/**",
      },
    ],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/makehappen-banner.png
