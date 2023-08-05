/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL:
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000"
        : `https://${process.env.VERCEL_URL}`,
  },
};

module.exports = nextConfig;
