/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ldalruqkubplvhztlaqx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/Error-image/**",
      },

      {
        protocol: "https",
        hostname: "ldalruqkubplvhztlaqx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/service_image/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "lh3.googleusercontent.com",
      //   port: "",
      //   pathname: "/a/**",
      // },
    ],
  },
};

export default nextConfig;
