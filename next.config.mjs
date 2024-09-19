import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Tambahin ini buat skip ESLint errors pas build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/register",
        destination: "https://imani-register-service.vercel.app/api/auth/register",
      },
      {
        source: "/api/login", // Menambahkan proxy untuk login
        destination: "https://imani-register-service.vercel.app/api/auth/login",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
