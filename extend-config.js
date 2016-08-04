'use strict';

var merge = require('lodash.merge');

var overrideConfig = {
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 2]
    }
};

module.exports = function extendConfig(config) {
    return merge({}, config, overrideConfig);
};
