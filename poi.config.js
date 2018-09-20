const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  configureWebpack(config, context) {
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'index.html'
        })
      );
  }
};
