const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const withTypescript = require('@zeit/next-typescript')

let customConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) return config

    const { IgnorePlugin } = webpack
    config.plugins.push( new IgnorePlugin(/\.\/server$/))
    return config
  },
  serverRuntimeConfig: {
    SMTV_CLONE_REPO_URL: process.env.SMTV_CLONE_REPO_URL,
  },
  publicRuntimeConfig: {
    SMTV_PUBLIC_REPO_URL: process.env.SMTV_PUBLIC_REPO_URL,
    SMTV_TITLE: process.env.SMTV_TITLE,
    SMTV_SHOW_LAYOUT: process.env.SMTV_SHOW_LAYOUT === 'true',
    SMTV_REPO_TYPE: process.env.SMTV_REPO_TYPE,
  },
}

customConfig = withCSS( customConfig )
customConfig = withTypescript( customConfig )
module.exports = customConfig

