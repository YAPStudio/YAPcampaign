const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = [{
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [{
			test: /\.html$/i,
			loader: "html-loader"
		}, {
			test: /\.less$/i,
			use: [
				"style-loader",
				"css-loader",
				"less-loader"
			]
		}]
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist")
		},
		port: 8000,
		compress: true
	},
	plugins: [
		new ESLintWebpackPlugin(),
		new HTMLWebpackPlugin({
			filename: "./index.html",
			template: "./src/index.html"
		})
	]
}];