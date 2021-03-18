const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextBuildId = require('next-build-id');
const withCSS = require('@zeit/next-css');

const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';

// const compose = (plugins) => ({
//   webpack(config, options) {
//     return plugins.reduce((config, plugin) => {
//       if (plugin instanceof Array) {
//         const [_plugin, ...args] = plugin;
//         plugin = _plugin(...args);
//       }
//       if (plugin instanceof Function) {
//         plugin = plugin();
//       }
//       if (plugin && plugin.webpack instanceof Function) {
//         return plugin.webpack(config, options);
//       }
//       return config;
//     }, config);
//   },

//   webpackDevMiddleware(config) {
//     return plugins.reduce((config, plugin) => {
//       if (plugin instanceof Array) {
//         const [_plugin, ...args] = plugin;
//         plugin = _plugin(...args);
//       }
//       if (plugin instanceof Function) {
//         plugin = plugin();
//       }
//       if (plugin && plugin.webpackDevMiddleware instanceof Function) {
//         return plugin.webpackDevMiddleware(config);
//       }
//       return config;
//     }, config);
//   },

//   // Indicator from next for prerendered page status
//   devIndicators: {
//     autoPrerender: !isProd,
//   },

//   // Setting a custom build id
//   generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),

//   // Disabling x-powered-by in response headers
//   poweredByHeader: false,
// });

// module.exports = compose([
//   [
//     // Bundle analyzer
//     withBundleAnalyzer,
//     {
//       enabled: process.env.ANALYZE === 'true',
//     },
//   ],
// ]);

module.exports = withCSS({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000000,
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
});
