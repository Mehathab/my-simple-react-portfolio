const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "portfolio-mehathab",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },

  plugins: [
    // new ModuleFederationPlugin({
    //   name: "starter",
    //   filename: "remoteEntry.js",
    //   remotes: {},
    //   exposes: {},
    //   shared: require("./package.json").dependencies,
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
