const path = require('path');

const appRoot = 'app';

const localWorkspace = path.join(__dirname, '..');
const globalWorkspace = path.join(localWorkspace, '..');

function localResolve(dir) {
  return path.join(localWorkspace, dir);
}

function globalResolve(dir) {
  return path.join(globalWorkspace, dir);
}

module.exports = {
  appRoot,
  localWorkspace,
  localResolve,
  globalWorkspace,
  globalResolve
};
