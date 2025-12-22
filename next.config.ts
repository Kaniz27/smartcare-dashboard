import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/user/dashboard",
        permanent: false,
      },
    ];
  },
  reactCompiler: true,
  transpilePackages: ["antd"],
  env: {
    ANT_DESIGN_COMPAT_MODE: "v5",
  },
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.0.106:3000"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "engine.careon.io" },
      { protocol: "http", hostname: "192.168.0.107" },
      { protocol: "https", hostname: "country-code-au6g.vercel.app" },
      { protocol: "https", hostname: "codebucks.in" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
