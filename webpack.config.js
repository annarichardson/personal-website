const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';
const prodAPI = process.env.API_ENV === 'production';

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || ''),
    'process.env.API_ENV': JSON.stringify(process.env.API_ENV || ''),
    __DEV__: !isProd,
  }),
  new MiniCssExtractPlugin({
    filename: isProd ? `styles[chunkhash].css` : `styles.css`,
  }),
  new StyleLintPlugin({
    files: '**/*.css',
  }),
  new HtmlWebpackPlugin({
    title: "Anna's Website",
    template: path.resolve(__dirname, './src/index.ejs'),
    filename: isProd ? '../index.html' : 'index.html',
    hash: isProd,
    alwaysWriteToDisk: true,
  }),
  // Required so we can use webpack-dev-server out of box
  new HtmlWebpackHarddiskPlugin({
    outputPath: path.resolve(__dirname, './'),
  }),
];

if (process.env.ANALYZE_BUNDLE) {
  plugins.push(new BundleAnalyzerPlugin({
    generateStatsFile: true,
    openAnalyzer: false,
  }));
}

// We only want to do this for production since it will mess with the module
// names in the bundle analysis
if (process.env.NODE_ENV === 'production' && !process.env.ANALYZE_BUNDLE) {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  context: path.resolve(__dirname, './src'),
  entry: {
    polyfill: 'babel-polyfill',
    app: './index',
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: isProd ? '[name][chunkhash].js' : '[name].js',
    publicPath: '/build/',
  },
  devServer: {
    publicPath: 'http://localhost:3000/build/',
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-icons)\/).*/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader?bypassOnDebug',
          },
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: `all`,
    },
  },
  resolve: {
    extensions: ['.js', '.css', '.svg', '.png'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      root: path.resolve(__dirname, 'src/'),
      store: path.resolve(__dirname, 'src/store/'),
      views: path.resolve(__dirname, 'src/views/'),
    },
  },
  plugins: plugins,
};
