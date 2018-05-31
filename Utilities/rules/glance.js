const path = require('path');
const autoprefixer = require('autoprefixer');

const sourcePath = path.join(__dirname, 'Sources');
const s3 = path.join(__dirname, 'Sources', 'CornerstoneToolControl');
const glancePath = path.join(__dirname, 'node_modules', 'paraview-glance', 'Sources');

console.log(s3);

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules[\\/](?!paraview-glance)/,
    use: [{ loader: 'babel-loader', options: { presets: ['env', 'react'] } }],
  },
  {
    test: /\.mcss$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]-[local]-[sha512:hash:base32:5]',
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            autoprefixer('last 3 version', 'ie >= 10'),
          ],
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer('last 3 version', 'ie >= 10')],
        },
      },
    ],
  },
  {
    test: /\.(png|jpg|svg)$/,
    use: 'url-loader?limit=600000',
  },
];
