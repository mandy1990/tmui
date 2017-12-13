/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017-7-18.
 */

const path = require('path');
const pkg = require('./package.json');

const webpack = require('webpack');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(['build'], {
    verbose: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    },
    'global': '{}'
  }),
  new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" }\n',
    raw: true
  }),
  new CopyWebpackPlugin([
    { from: 'example/*/index.html' }
  ])
];

const needClean = process.argv.indexOf('--watch') > -1;
needClean && plugins.shift();

console.log('Building..., Please wait a moment.');

const getEntry = dir => {
  const foundScripts = glob.sync(`${dir}/*/index.js`, {});
  // 生成 entry 映射表
  const ret = {};
  foundScripts.forEach(function (scriptPath) {
    if (!/\.entry\.js$/.test(scriptPath)) {
      ret[scriptPath.replace(/^(.*)\.js$/, '$1')] = './' + scriptPath;
    }
  });
  return ret;
};

// const example = getEntry('example');
const entry = Object.assign({
  'index': './index.js'
});

const getBaseConfig = () => ({
  devtool: '#source-map',
  entry,
  context: __dirname,
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: `npm/${pkg.name}/[name]`,
    umdNamedDefine: false
  },
  stats: {
    colors: true,
    modules: false,
    reasons: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      }
    }, {
      test: /\.vue(\?[^?]+)?$/,
      use: []
    }]
  },
  plugins,
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules'
    ]
  }
});

const webCfg = getBaseConfig();
webCfg.output.filename = '[name].web.js';

webCfg.module.rules[1].use.push({
  loader: 'vue-loader',
  options: {
    compilerModules: [
      {
        postTransformNode: el => {
          el.staticStyle = `$processStyle(${el.staticStyle})`
          el.styleBinding = `$processStyle(${el.styleBinding})`
        }
      }
    ]
  }
});

const nativeCfg = getBaseConfig();
nativeCfg.output.filename = '[name].native.js';
nativeCfg.module.rules[1].use.push('weex-loader');

const exportConfig = [
  webCfg,
  nativeCfg
];

module.exports = exportConfig;
