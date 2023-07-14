const path = require('path');

module.exports = {
  // Base URL for the application
  publicPath: '/',
  
  // Output directory for the built files
  outputDir: 'dist',
  
  // Enable/disable source maps for debugging
  productionSourceMap: true,
  
  // Configure webpack-dev-server
  devServer: {
    // Customize host and port
    host: 'localhost',
    port: 8080,
    
    // Enable/disable hot module replacement
    hot: true,
    
    // Proxy API requests to a different backend server
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  
  // Additional webpack configuration
  configureWebpack: {
    // Configuration options for webpack
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  },
  
  // Additional plugins to be included in the webpack build
  pluginOptions: {
    // Customize the Vue CLI plugin options here
    examplePlugin: {
      // Plugin-specific options
    }
  }
}
