// /** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  experimental: {
    appDir: true,
    // mdxRs: false,
    // serverComponentsExternalPackages: ['rehype-highlight']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
