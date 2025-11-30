/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        resolveAlias: {
            // Alias 'tap' to an empty file to prevent build errors from thread-stream tests
            'tap': './src/lib/empty.js',
        },
    },
};

module.exports = nextConfig;
