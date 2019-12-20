import merge from "webpack-merge";
import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map"
});

export default config;
