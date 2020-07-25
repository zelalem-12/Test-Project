const path = require("path");

const rules = [
  {
    test: /\.(js|ts|tsx?)/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    port: 8000,
  },
};
