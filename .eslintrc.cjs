module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'arrow-body-style': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-fragments': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{tsx,cjs}', 'vite.config.{tsx,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
