const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    devServer: {
        historyApiFallback: true,

        // every request made to 'locahost:8080/api/xxxx' will be proxyfied to 'http://localhost:5000/api/xxxx'
        proxy: {
            "/api/*": {
                target: "http://localhost:5000",
                secure: false,
                rewrite: function(req, options) {
                    //you can handle rewrite here if you need to
                }
            },

        },

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
