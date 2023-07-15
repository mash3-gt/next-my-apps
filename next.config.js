/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
}

module.exports = nextConfig
