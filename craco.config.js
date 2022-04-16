const path = require('path');
const npm_package = require('./package.json');
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  webpack: {
    plugins: {
      plugin: CracoAliasPlugin,
      options: {},
    },
  },
  babel: {
    presets: [
      '@emotion/babel-preset-css-prop',
    ],
  },
};
