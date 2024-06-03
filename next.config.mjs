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
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver/silver-white-favicon.png
// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver/make-happen.jpg

// https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/vgseven-white-favicon.png
