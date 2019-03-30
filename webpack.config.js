const path = require("path");

module.exports = {
    entry: "./scripts/index.tsx",
    output: {
        path: path.resolve(__dirname, "scripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.tsx?$/, //support ts or tsx
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
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