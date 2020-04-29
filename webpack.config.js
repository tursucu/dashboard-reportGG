const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },
  plugins: [new CopyWebpackPlugin([{ from: 'src/app/static/img', to: 'img' }])],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  ssr: true,
                  displayName: true,
                  pure: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: 'all',
      }),
    ],
  },
};
