const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const port = 8081;
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: `http://localhost:${port}/`,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: port,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // Note!! order is from last to first
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ],
  },
 /*  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  }, */
  plugins: [
    new ModuleFederationPlugin({
        name: 'sub_a',
        filename: 'remoteEntry.js',
        exposes: {
            './SubAApp': './src/index',
        },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};