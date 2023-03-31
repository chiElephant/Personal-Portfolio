/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	exportTrailingSlash: true,

	async redirects() {
		return [
			{
				source: '/',
				destination: '/about',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
