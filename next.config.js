/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        resolveAlias: {
            // Alias 'tap' and other dev dependencies to an empty file to prevent build errors from thread-stream tests
            'tap': './src/lib/empty.ts',
            'desm': './src/lib/empty.ts',
            'fastbench': './src/lib/empty.ts',
            'why-is-node-running': './src/lib/empty.ts',
            'pino-elasticsearch': './src/lib/empty.ts',
        },
    },
};

module.exports = nextConfig;
