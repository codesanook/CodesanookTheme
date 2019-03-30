const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../Styles/style.css"
        }),
        new CopyPlugin([{
                from: './node_modules/slick-carousel/slick/fonts/*',
                to: './../Styles/fonts',
                flatten: true
            },
            {
                from: './node_modules/slick-carousel/slick/ajax-loader.gif',
                to: './../Styles',
                flatten: true
            }
        ]),
    ],
    entry: "./scripts/index.tsx",
    output: {
        path: path.resolve(__dirname, "Scripts"),
        filename: "bundle.js",
        publicPath: "/Themes/CodeSanookTheme"
    },
    module: {
        rules: [{
                test: /\.tsx?$/, //support ts or tsx
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: '../Styles'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        }
                    }, // translates CSS into CommonJS
                    {
                        loader: "resolve-url-loader",
                        options: {
                            debug: true,
                        }
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};