const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.join(__dirname, "src"),

	entry: "./main",

	output: {
		path:     path.join(__dirname, "dist"),
		filename: "app.js"
	},

	resolve: {
		extensions: ['', '.js']
	},

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        js: [ "app.js"],
      }
    }),
  ]
}
