/** @type {import('next').NextConfig} */
// const withVideos = require('next-videos');

// const nextConfig = {
// 	reactStrictMode: true,

// 	webpack: (config) => {
// 		config.module.rules.push({
// 			test: /\.(mp4)$/,
// 			use: {
// 				loader: 'file-loader',
// 				options: {
// 					name: '[name].[ext]',
// 					outputPath: 'static/videos',
// 					publicPath: '/_next/static/videos/',
// 				},
// 			},
// 		});
// 		return config;
// 	},
// };

// module.exports = withVideos(nextConfig);

// eslint-disable-next-line no-undef
const withVideos = require('next-videos');

// eslint-disable-next-line no-undef
module.exports = withVideos({
	reactStrictMode: true,

	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp4)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'static/videos',
					publicPath: '/_next/static/videos/',
				},
			},
		});
		return config;
	},
});
