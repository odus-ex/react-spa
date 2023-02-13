const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    //by default only does JS and JSON
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
