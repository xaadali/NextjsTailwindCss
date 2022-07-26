/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "d2gtaxp1n1squz.cloudfront.net",
      "tokennow.s3.ap-northeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
