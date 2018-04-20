const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-0', 'env', 'react']
          }
        }
      }
    ]
  },

  entry: path.join(__dirname, '/src/index.js'),

  mode: "development",

	output: {
		path:     path.join(__dirname, "dist"),
		filename: "app.js"
	},

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      files: {
        js: [ "app.js"],
      }
    }),
  ]
}
