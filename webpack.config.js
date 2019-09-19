const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                             publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        }, 
                    },
                    'css-loader', 'sass-loader'
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader?pretty=true',
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.pug',
            filename: 'index.html'
        }),
    ],
};