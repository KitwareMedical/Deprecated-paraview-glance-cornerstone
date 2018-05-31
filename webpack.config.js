const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const plugins = [];
const entry = path.join(__dirname, './Sources/index.js');
const sourcePath = path.join(__dirname, './Sources');
const outputPath = path.join(__dirname, './Distribution');
const glancePath = path.join(__dirname, 'node_modules', 'paraview-glance', 'Distribution');

const linterRules = require('./Utilities/rules/linter.js');
const glanceRules = require('./Utilities/rules/glance.js');
const vtkRules = require('./Utilities/rules/vtkjs.js');

plugins.push(
  new CopyPlugin([
    // copy ITK files over to Distribution for WebWorkers
    {
      from: path.join('node_modules', 'itk'),
      to: 'itk',
    },
    { from: path.join(glancePath, 'glance.js') },
    { from: path.join(glancePath, 'glance-external-ITKReader.js') },
    { from: path.join(glancePath, 'glance-external-Workbox.js') },
  ])
);

module.exports = {
  entry: {
    'glance-external-Cornerstone': entry,
  },
  plugins,
  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [].concat(linterRules, glanceRules, vtkRules),
  },
  resolve: {
    alias: {
      'cornerstone-tools': path.resolve(
        path.join('node_modules', '@florist', 'cornerstone-tools')
      ),
    },
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  devServer: {
    contentBase: outputPath,
    port: 9999,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: false,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true,
    },
  },
};
