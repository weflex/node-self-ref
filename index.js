
'use strict';

function accessPkgInfo () {
  let pkgInfo;
  try {
    pkgInfo = require('../../package.json');
  } catch (e) {
    throw new Error('Cannot load project package');
  }
  return pkgInfo;
}

const path = require('path');
const modpath = path.join(__dirname, '../../', pkgInfo.main);
module.exports = require(modpath);

