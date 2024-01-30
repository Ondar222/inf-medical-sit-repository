/* @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  // target: 'server',
  env: {
    path: "http://api.inf-medical.rtyva.ru",
    // backend: "http://api.inf-medical.rtyva.ru",
    APIpath: `http://api.inf-medical.rtyva.ru`,
    token: '8359ea1bc745dbe85c913956d4b3fbdf36fec088f3098d78ef7a96326415e155057a180105907dba13caee8c9ee1c22e7e7cd43d7c04f063123e9802302908e30725bb8ec6e56ae27f0cf26116f45e42920d9900318fd3ad78f1515077325429630d755b88de4c172051a9f8f489a3d9653073f268cf28020bf4cdbdf1df92c8'
  },
  webpack: (config, { dev }) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    );

    return config
  },
  images: {
    domains: [`api.inf-medical.rtyva.ru`, 'mc.yandex.ru'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `api.inf-medical.rtyva.ru`,
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
        pathname: '/'
      }
    ]
  },
  compress: true,

  reactStrictMode: false,
  output: 'standalone'
}

module.exports = nextConfig
