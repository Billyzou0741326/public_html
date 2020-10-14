const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./config");


module.exports = {
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: `${config.basename}`,
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpg|svg|git)$/,
                use: [
                    "file-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
            chunks: ["index"],
            base: `${config.basename}`,
            publicPath: `${config.basename}`,
        }),
    ],
    resolve: {
        extensions: [".js",".jsx",".ts",".tsx"],
    },
    devServer: {
        host: "127.0.0.1",
        port: 3000,
        publicPath: "/",
        historyApiFallback: true,
        compress: true,
    },
};