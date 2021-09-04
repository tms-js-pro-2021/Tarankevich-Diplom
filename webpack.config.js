const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
  devServer: {
    static:{
      directory:path.join(__dirname,'/public'),
      watch:true,
      open:true
      },
    port:3000,
    historyApiFallback:true,
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
    ],
  },
};