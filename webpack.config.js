const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//var nodeExternals = require('webpack-node-externals');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
}

module.exports = {
    // target: 'node', // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: {
        main: PATHS.source + '/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: PATHS.build,
    },
    devServer: {
        publicPath: '/dist/',
        contentBase: path.resolve (__dirname, "dist"),
        watchContentBase: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.s*css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    //'resolve-url-loader',
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader?pretty=true',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      context: 'src',
                      exclude: [/node_modules/],
                    }
                  },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/ui_kit/colors-type.pug',
            filename: 'colors-type.html'
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/ui_kit/cards.pug',
            filename: 'cards.html'
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/ui_kit/form-elements.pug',
            filename: 'form-elements.html'
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/ui_kit/headers-and-footers.pug',
            filename: 'headers-and-footers.html'
        }),
    ],
};