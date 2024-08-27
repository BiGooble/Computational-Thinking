module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: ['warn', 'single'],
    curly: [1, 'all'],
    semi: ['warn', 'always'],
    strict: ['warn', 'global'],
    indent: ['warn', 2],
    'no-multi-spaces': ['warn'],
    'standard/no-callback-literal': 'off',
    'node/no-callback-literal': 'off',
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'off',
    'no-else-return': 'warn',
    'max-depth': ['warn', { max: 10 }],
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
};
