/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eo4grnhr9puxdgdq.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company/vgseven.jpg