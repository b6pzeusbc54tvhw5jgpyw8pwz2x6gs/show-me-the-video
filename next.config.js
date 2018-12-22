const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const withTypescript = require('@zeit/next-typescript')

let customConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) return config

    const { IgnorePlugin } = webpack
    config.plugins.push( new IgnorePlugin(/\.\/server$/))

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      entries['main.js'].unshift('@babel/polyfill')
      return entries
    }

    return config
  },
}

customConfig = withCSS( customConfig )
customConfig = withTypescript( customConfig )
module.exports = customConfig

