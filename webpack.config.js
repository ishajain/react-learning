const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    port: 4000,
    hot: "only",
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Learning Course",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
