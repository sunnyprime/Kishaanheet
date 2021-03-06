module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },

  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },

  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true,
    },
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'vue/max-attributes-per-line': 'off',
    'max-len': 'off',

  },
};
