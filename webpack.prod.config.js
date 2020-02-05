const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false,  // 清除註解
                    }
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [`${__dirname}/dist`],
            verbose: true,
        }),
        // 把 js 中 import 導入的樣式文件，單獨打包成一個 css 文件，結合 html-webpack-plugin，以 link 的形式插入到 html 文件中
        new MiniCssExtractPlugin({
            filename: 'dist/css/bundle.[hash].css'
        })
    ],
    performance: {
        hints: false
    },
    mode: 'production'
});