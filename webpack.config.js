const { resolve } = require("path");

module.exports = {
  entry: resolve(__dirname, "src", "index.js"),
  output: {
    path: resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" //load css files on js
          },
          {
            loader: "css-loader" //handle imports inside css files
          }
        ]
      }
    ]
  }
};
