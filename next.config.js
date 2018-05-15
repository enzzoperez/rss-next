// next.config.js
const withCSS = require('@zeit/next-css')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
if (process.env.NODE_ENV === 'production') {
    module.exports = withCSS({
        webpack: config => {
          config.plugins.push(
            new SWPrecacheWebpackPlugin({
              verbose: true,
              staticFileGlobsIgnorePatterns: [/\.next\//],
              runtimeCaching: [
                {
                  handler: 'networkFirst',
                  urlPattern: /^https?.*/,
                },
              ],
            })
          )
          config.node = {
            fs: 'empty',
          }
          return config
        },
      })
  }


