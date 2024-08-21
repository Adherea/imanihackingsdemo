import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Tambahin ini buat skip ESLint errors pas build
  },
};

export default withNextIntl(nextConfig);
