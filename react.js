'use strict';

var extendConfig = require('./extend-config');

module.exports = extendConfig(
    require('eslint-config-airbnb')
);
