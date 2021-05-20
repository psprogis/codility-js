module.exports = {
    plugins: ['jest'],

    env: {
        commonjs: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'no-use-before-define': 'off',
        'no-plusplus': 'off',
        'max-len': ['error', { code: 120 }],
        'no-continue': 'off',
    },
};
