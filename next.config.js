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

module.exports = nextConfig;

// https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/make-things-happen.png

// https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/vgseven-company-favicon.png

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/titanium/titanium-favicon.png

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver-company/silver-black-favicon.png

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/radium/radium-favicon.png
