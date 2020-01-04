const withPlugins = require('next-compose-plugins')
const path = require('path')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['interfaces'] = path.join(__dirname, 'interfaces')
    return config
  }
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        imagesName: '[name]-[hash].[ext]',
        optimizeImagesInDev: true,
        webp: {
          preset: 'default',
          quality: 90
        },
        optipng: {
          optimizationLevel: 3
        }
      }
    ]
  ],
  nextConfig
)
