/*
 * @Author: sunpeiyuan
 * @Date: 2020-04-18 00:06:24
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2020-04-18 00:11:16
 * @FilePath: \ts-hello-template\build\webpack.config.js
 * @Description: 配置文件
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",

  output: {
    filename: "main.js",
  },

  resolve: {
    extensions: [".ts", "tsx", ".js"],
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
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
};
