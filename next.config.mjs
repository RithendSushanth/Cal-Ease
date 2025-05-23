/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
        { hostname: "utfs.io", port: "", protocol: "https" },
        {
          hostname: "avatars.githubusercontent.com",
          port: "",
          protocol: "https",
        },
        {
          hostname: "lh3.googleusercontent.com", // Add this line
          port: "",
          protocol: "https",
        },
      ],
    },
    eslint: {
      // Disables ESLint during builds
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Disables type checking during builds
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig;
  