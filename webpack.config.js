const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/public"),
      watch: true,
    },
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
