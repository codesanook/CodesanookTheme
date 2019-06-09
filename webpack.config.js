/*
Useful webpack setup link
Setup webpack with Bootstrap
https://getbootstrap.com/docs/4.0/getting-started/webpack/
*/
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './scripts/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'scripts'),
        filename: '[name]-bundle.js',
    },
    // Resolve JS setup 
    // https://stackoverflow.com/questions/47721962/webpack-react-typescript-module-not-found-in-node-modules-react?rq=1
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: ''
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: 'styles'
                }
            }, {
                loader: "css-loader" // translates CSS into CommonJS modules
            }, {
                loader: "resolve-url-loader"
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
                options: {
                    sourceMap: true
                }
            }],
            exclude: /node_modules/
        }],
    },
    //https://stackoverflow.com/a/51167616/1872200
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../styles/style.css",
        })
    ],
    externals: {
        //module react and retrieve as React variable https://webpack.js.org/configuration/externals/#string
        React: ['react'],
        ReactDOM: ['react-dom']
    }
};
