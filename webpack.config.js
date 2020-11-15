const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  target: "node",
  mode: "production",
  externals: [nodeExternals()],
  entry: {
    index: "./bin/www.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
