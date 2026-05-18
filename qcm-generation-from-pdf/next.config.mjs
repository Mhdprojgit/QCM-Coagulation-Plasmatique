/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/QCM-Coagulation-Plasmatique',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
