/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dlaiwpar81okkqcb.public.blob.vercel-storage.com",
        port: "",
        pathname: "/vgseven-company/**",
      },
    ],
  },
};

module.exports = nextConfig;

// https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/vgseven-company.png
