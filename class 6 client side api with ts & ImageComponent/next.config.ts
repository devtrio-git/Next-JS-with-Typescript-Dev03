import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dpreview.com"
      },
      {
        protocol: "https",
        hostname: "myshop.pk"
      },
    ]
  }
};

export default nextConfig;
