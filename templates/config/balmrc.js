const { appRoot, globalResolve } = require('./env');
const { VueLoaderPlugin } = require('vue-loader');
const alias = require('./balm.alias');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    proxyConfig: {
      context: '/api',
      options: {
        target: 'http://your.project.dev', // Target host
        changeOrigin: true // Needed for virtual hosted sites
      }
    },
    historyOptions: true
  },
  roots: {
    source: appRoot
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['vue', 'vue-router', 'vue-meta', 'axios'],
      main: `./${appRoot}/scripts/index.js` // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    includeJsResource: [globalResolve('yiban-shared/src/scripts')],
    alias
  },
  assets: {
    // root: 'assets', // Replace 'assets' to your remote project root
    // mainDir: 'public',
    cache: true
  }
  // More Config
};
