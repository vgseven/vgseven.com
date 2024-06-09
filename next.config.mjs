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
      {
        protocol: "https",
        hostname: "odouepjkxheu5esn.public.blob.vercel-storage.com",
        port: "",
        pathname: "/silvercompany/**",
      },
    ],
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg
// https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/v-favicon.png
