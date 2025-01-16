/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'assets.aceternity.com',"api.microlink.io",'upload.wikimedia.org' ], // Combine all allowed domains here
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.externals.push({
        'sharp': 'commonjs sharp'
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  