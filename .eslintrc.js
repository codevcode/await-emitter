// [eslint rule docs](http://eslint.org/docs/rules/)

module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: 'eslint:recommended',
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'global-require': 'off',
    'space-before-function-paren': ['error', 'always'],
    'func-names': 'error',
    'prefer-arrow-callback': 'error' ,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
}
