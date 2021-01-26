const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const csso = require('postcss-csso');

const paths = {
  src: path.join(__dirname, `src`),
  dist: path.join(__dirname, `docs`),
};

const baseConfig = {
  externals: {
    paths: paths,
  },
  entry: {
    app: paths.src,
  },
  output: {
    filename: `[name].min.js`,
    path: paths.dist,
    publicPath: '/react-redux-gallery-example',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [csso],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/404.html`,
          to: '404.html',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: `./index.html`,
    }),
  ],
};

const serveConfig = merge(baseConfig, {
  name: 'serve',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: baseConfig.externals.paths.dist,
    host: '0.0.0.0',
    port: 3600,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

const buildConfig = merge(baseConfig, {
  name: 'build',
  mode: 'production',
  plugins: [],
});

module.exports = [serveConfig, buildConfig];
