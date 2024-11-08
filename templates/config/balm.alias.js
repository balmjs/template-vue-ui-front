const { appRoot, localResolve, globalResolve } = require('./env');
const globalAlias = require(globalResolve(
  'yiban-shared/config/alias/desktop.js'
));

module.exports = {
  ...globalAlias,
  // 三方库别名
  miragejs$: 'miragejs/dist/mirage-esm.js',
  // 本地别名
  '@mock-server': localResolve('mock-server'),
  '@': localResolve(`${appRoot}/scripts`)
};
