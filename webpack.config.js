const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.css'] // Archivos que soportará webpack
	},
	entry: ['./main.js'],
	mode: 'production',
	// mode: 'development',
	module: {
		rules: [
			// Configuracion de los presets y los archivos de react
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ['transform-class-properties']
                    }
				}
			},

			// Configuracion de los staticos a base64
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000000,
					}
				}
			},
			// Configuracion para los archivos css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
		]
	},

	// Configuramos la salida del bundle
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js'
	},

	// Configurando la ruta de salida del css
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './style.css',
        })
    ]

}