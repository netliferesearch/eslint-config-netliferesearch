'use strict';

var extendConfig = require('./extend-config');

module.exports = extendConfig(
  require.resolve('eslint-config-airbnb/base')
);
