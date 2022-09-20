const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      remotes: {
        host: 'host@http://localhost:8080/remoteEntry.js' , 
        reactApp: 'reactApp@http://localhost:8081/remoteEntry.js',
        vue3App: 'vue3App@http://localhost:8082/remoteEntry.js',
      },
      exposes: {
        './Navbar':'./src/Navbar.jsx',
        './navbarWrapper': './src/navbarWrapper',
        './reactcard': './src/views/reactcard.jsx',
        './mountCard': './src/views/mountCard',
        './mountReact':'./src/mountReact',
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
