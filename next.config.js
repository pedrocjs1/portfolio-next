/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader?name=[path][name].[ext]",
    });
    return config;
  },
};

module.exports = nextConfig;
