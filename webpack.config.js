const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.styl', '.css'] // Archivos que soportará webpack
	},
	entry: {
		bundle: './static/dev/app.main.js',
		login: './login/static/dev/app.main.js'
	},
	// mode: 'production',
	mode: 'development',
	devServer: {
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["react", "es2015", "es2017", "stage-0"],
					}
				}
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000000,
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	output: {
		path: path.resolve(__dirname + '/static/js'),
		filename: '[name].js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '../css/[name].css'
		}),

		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
			canPrint: true
		})
	]
}