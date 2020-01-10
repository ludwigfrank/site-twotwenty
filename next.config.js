const withPlugins = require('next-compose-plugins')
const path = require('path')

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['interfaces'] = path.join(__dirname, 'interfaces')
    return config
  }
}

module.exports = withPlugins([], nextConfig)
