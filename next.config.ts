import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.marianavillarreal.com" }],
        destination: "https://marianavillarreal.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
