module.exports = {
  parser: 'babel-eslint', // use babel to parse
  env: {
    browser: true,
    es6: true,
    node: true, // for node globals, such as 'module'
    jest: true, // for jest globals, such as 'test' and 'expect'
  },
  // 'plugins' section only 'activate' these plugins
  // still need manually edit 'rules' to actually use them
  // such as { react/xxx: 'error' }
  plugins: [
    'react',
  ],
  // 'extends' section will extend these configs
  // and they will take effect directly
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'linebreak-style': [2, 'unix'],
    'arrow-parens': [2, 'as-needed'],
    'react/jsx-curly-spacing': [2, {
      when: 'always',
      spacing: { objectLiterals: 'never' },
    }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      // 'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    /* ---------- turned off ---------- */
    'max-len': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'no-underscore-dangle': 0,
    'no-multi-spaces': 0,
    'jsx-a11y/click-events-have-key-events': 0,                             // allow click handler on <div>
    'jsx-a11y/no-static-element-interactions': 0,                           // allow click handler on <div>
    'no-unused-expressions': [2, { allowShortCircuit: true }],              // allow x && y()
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],    // so can import enzyme, which is dev dependencies
    'react/jsx-props-no-spreading': 0,                                      // allow passing in props like { ...restProps }
  },

  // don't know what these are... generated by eslint --init
  // TODO: do more research about these
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
