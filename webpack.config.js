const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const prod = argv.mode === "production";

    return {
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval",
        entry: {
            main: path.resolve(__dirname, "src/index.tsx")
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js",
            clean: true,
        },
        devServer: {
            // 포트 번호 설정
            port: 9000,
            // 핫 모듈 교체(HMR) 활성화 설정
            hot: true,
            // gzip 압축 활성화
            compress: true,
            // History 라우팅 대체 사용 설정
            historyApiFallback: true,
            // 개발 서버 자동 실행 설정
            open: true,
            watchFiles: [path.resolve(__dirname, 'src')],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", "..."],
            alias: {
                "@Components": path.resolve(__dirname, "src/components/"),
                "@Layout": path.resolve(__dirname, "src/components/layout"),
                "@Pages": path.resolve(__dirname, "src/pages/"),
                "@Images": path.resolve(__dirname, "src/assets/images"),
                "@Fonts": path.resolve(__dirname, "src/assets/fonts"),
                "@Data": path.resolve(__dirname, "src/data"),
                "@Store": path.resolve(__dirname, "src/store"),
            },
        },
        module: {
            rules: [
                {
                    test: /.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: ["babel-loader", "ts-loader"],
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(jpg|png|gif|svg|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name]_[hash].[ext]",
                                outputPath: "images",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                process: "process/browser.js",
            }),
            new webpack.ProvidePlugin({
                React: "react",
            }),
            new HtmlWebpackPlugin({
                template: "./template/index.html",
                favicon: "./src/assets/images/favicon.png",
                minify:
                    process.env.NODE_ENV === "production"
                        ? {
                            collapseWhitespace: true, // 빈칸 제거
                            removeComments: true, // 주석 제거
                        }
                        : false,
            }),
            new CleanWebpackPlugin(),
        ],
    };
};
