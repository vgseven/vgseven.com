/** @type {import('next').NextConfig} */

const nextConfig = {
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
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/vgseven-banner.png
