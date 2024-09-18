/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  transpilePackages: ['next-sanity'],
};

module.exports = nextConfig;
