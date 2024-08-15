// require('dotenv').config()

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      library: 'messages-widget',
      libraryTarget: 'umd',
      filename: 'js/bundle.js',
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // config.optimization.delete('splitChunks')
  },
  css: {
    extract: { 
      ignoreOrder: true,
      filename: 'css/bundle.css',
    },    
  },
  devServer: {
    https: true,
    port: 3000,
  }
}