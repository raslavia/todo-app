const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
     },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: true,
                    },
                  },
                  'css-loader',
                ],
              },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};