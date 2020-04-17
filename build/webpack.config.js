/*
 * @Author: sunpeiyuan
 * @Date: 2020-04-18 00:06:24
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2020-04-18 01:51:16
 * @FilePath: \ts-hello-template\build\webpack.config.js
 * @Description: 配置文件
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash:8].js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devtool: process.env.NODE_DEV === "production" ? false : "inline-source-map",

  devServer: {
    contentBase: "./dist",
    stats: "errors-only",
    compress: false,
    host: "localhost",
    port: 8080,
  },

  plugins: [
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: ["dist"], // bug: 这样的写法，构建前无法先清空 dist 文件夹
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
