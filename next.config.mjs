/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xfkvjckis9fcttft.public.blob.vercel-storage.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["suheapparel.my.id", "localhost:3000"],
    },
  },
};

export default nextConfig;
