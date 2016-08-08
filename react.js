'use strict';

var extendConfig = require('./extend-config');

module.exports = extendConfig({
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y'
    ].map(require.resolve),
    rules: {}
});
