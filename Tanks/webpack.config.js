const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    publicPath: 'http://localhost:8083/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  devServer: {
    open: false,
    port: 8083,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
    runtimeChunk: false,
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'tanks',
      filename: 'remoteEntry.js',
      exposes: {
        './Tanks': './src/Tanks',
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
