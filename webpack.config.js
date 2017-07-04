let path = require( 'path' );
let ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
let HtmlWebpackPlugin = require( 'html-webpack-plugin' );
let CleanWebpackPlugin = require( 'clean-webpack-plugin' );

let extractScss = new ExtractTextPlugin( {
	filename: 'css/govstrap.scss'
} );

let extractBootstrap = new ExtractTextPlugin({
    filename: 'bootstrap.min.css'
});

let extractPrism = new ExtractTextPlugin({
    filename: 'prism.css'
});

let extractIE10 = new ExtractTextPlugin({
    filename: 'ie10-viewport-bug-workaround.css'
});

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve( __dirname, 'dist/assets' ),
		filename: 'govstrap.js',

    	// publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'es2015' ],
                            outputPath: "js/[name].[ext]",
                            publicPath: 'js/[name].[ext]'
						}
                    }
                ]
                },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract( {
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            },
                        },
                        'postcss-loader',
                    ],
                } ),
            },
			{
				test: /\.scss$/,
				use: extractScss.extract( {
					use: [ 'css-loader', 'sass-loader', ]
				} )
                },
			{
				test: /\.pug$/,
				use: [ 'html-loader' , 'pug-loader']
                },
			{
				test: /\.(ttf|otf|eot|woff(2))$/,
                loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',

                  }
            },
			{
				test: /\.(jpe?g|png|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							publicPath: 'images/'
						}
                        },
					{
						loader: 'image-webpack-loader',
						query: {
							mozjpeg: {
								quality: 65
							},
							pngquant: {
								quality: "65-90",
								speed: 4
							},
							svgo: {
								plugins: [
									{
										removeViewBox: false
                                        },
									{
										removeEmptyAttrs: false
                                        }
                                    ]
							}
						}

					    }
					]
					}
					]
	},

    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },

	plugins: [
        extractBootstrap,
        extractIE10,
        extractPrism,
        // extractScss,
    new HtmlWebpackPlugin( {
			template: 'src/index.pug'
		} ),
    new CleanWebpackPlugin( [ 'dist' ] )
    ]
};
