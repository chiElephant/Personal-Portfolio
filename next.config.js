/** @type {import('next').NextConfig} */
const fs = require('fs')
const withVideos = require('next-videos')

module.exports = withVideos({
    reactStrictMode: true,
    env: {
        rawJsFromFile: fs.readFileSync('./scripts/dark_mode.js').toString(),
    },

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
        })
        return config
    },
})
