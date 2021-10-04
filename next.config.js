const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_APP_ANALYZE === 'true' || process.env.ANALYZE === 'true',
});
const nextBuildId = require('next-build-id');
const withPlugins = require('next-compose-plugins');
const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';
const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  // Indicator from next for prerendered page status
  devIndicators: {
    autoPrerender: !isProd,
  },

  // Setting a custom build directory & build id
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),

  // Disabling x-powered-by in response headers
  poweredByHeader: false,
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
