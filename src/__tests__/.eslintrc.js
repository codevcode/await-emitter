module.exports = {
  parser: 'babel-eslint', // for lint Babel code, like async/await
  env: {
    mocha: true,
  },
  globals: {
    assert: false,
    sinon: false,
  },
  rules: {
     'prefer-arrow-callback': 'off',
     'func-names': 'off',
  },
}
