const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = true;

module.exports = {
    entry: {
        index: ['./src/main.js']
    },
    output: {
        filename: 'dist/js/bundle.[hash].js',
        path: path.resolve('./'),
    },
    plugins: [
        // 當使用 webpack 打包時，創建一個 html 文件，並把 webpack 打包後的靜態文件自動插入到這個 html 文件中
        new HtmlWebpackPlugin({
            template: './src/main.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            stats: {
                children: false
            }
        })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: false
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: './dist/images',
                            name: 'i.[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};