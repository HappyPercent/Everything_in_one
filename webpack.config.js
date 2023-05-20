const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    publicPath: 'http://localhost:8080/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  optimization: {
    minimize: false,
    runtimeChunk: true,
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: ['/node_modules/', '/Hanoy/', '/Life/', '/Tanks/'],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        life: 'life@http://localhost:8081/remoteEntry.js',
        hanoy: 'hanoy@http://localhost:8082/remoteEntry.js',
        tanks: 'tanks@http://localhost:8083/remoteEntry.js',
      },
      shared: {
        ...deps,
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
