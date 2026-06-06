/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.prismic.io' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'admin.proxen.ca' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/single-blog', destination: '/blog', permanent: true },
      { source: '/single-blog/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/cities', destination: '/cities-we-serve', permanent: true },
    ];
  },
};

module.exports = nextConfig;
