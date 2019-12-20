import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import DashboardPlugin from "webpack-dashboard/plugin";

const htmlTemplate = {
  title: "Custom Template",
  template: path.join(__dirname, "src/index.template.html")
};

export default {
  entry: {},
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpe?g|gif)$/, use: ["file-loader"] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlTemplate),
    new DashboardPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].contenthash.js",
    filename: "[name].[contenthash].js"
  }
};
