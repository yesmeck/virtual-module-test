var VirtualModulesPlugin = require('webpack-virtual-modules');

var virtualModules = new VirtualModulesPlugin({
  'node_modules/@remax/hello.js': 'module.exports = "foo"',
});

module.exports = {
  mode: 'development',
  devtool: false,
  plugins: [
    virtualModules
  ]
};
