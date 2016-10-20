const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

const rootDir = path.resolve(__dirname);

var config = {
	entry: APP_DIR + '/scripts/app.js',

	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?/,
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.(html)$/,
				loader: 'raw',
				include: APP_DIR
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass'),
				include: APP_DIR
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist'], {
			'root': rootDir
		}),
		new HtmlWebpack({
			filename: 'index.html',
			inject: 'body',
			template: path.resolve(rootDir, 'src', 'index.html')
		}),
		new ExtractTextPlugin('[name].css'),
	],

	devServer: {
		contentBase: path.resolve(rootDir, 'dist'),
		inline: true,
		port: 9000
	},

	debug: true
};

module.exports = config;