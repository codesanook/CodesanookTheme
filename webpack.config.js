const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../Styles/style.css"
        })
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