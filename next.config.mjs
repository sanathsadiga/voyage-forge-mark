/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      {
        pathname: '/api/og**',
        search: '**',
      },
      {
        pathname: '/images/**',
      },
      {
        pathname: '/vo (2).png',
      },
      {
        pathname: '/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['192.168.1.37'],
  },
};

export default nextConfig;
