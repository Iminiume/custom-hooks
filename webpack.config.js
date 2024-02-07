const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    animationHooks: "./src/hooks/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "animationHook.js",
    library: "animationHookPlugin",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
