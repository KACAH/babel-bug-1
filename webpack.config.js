module.exports = {
  mode: "development",
  entry: ["./input.js"],
  output: {
    filename: "output.js",
    path: __dirname,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
};
