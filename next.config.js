/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        // Exclude test files from thread-stream package
        config.module.rules.push({
            test: /node_modules\/thread-stream\/test/,
            use: 'null-loader'
        });

        return config;
    },
};

module.exports = nextConfig;
