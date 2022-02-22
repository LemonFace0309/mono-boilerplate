module.exports = {
  extends: ['./eslintrc-base.js', 'plugin:tailwind/recommended', 'next'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['import-alias', 'import-name', 'simple-import-sort'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',

    'import-alias/import-alias': ['warn', { relativeDepth: 2, rootDir: resolve(rootDir) }],

    'import-name/default-import-name': ['error', { classnames: 'cx' }],

    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: { complexity: ['error', 16] },
    },
  ],
  ignorePatterns: ['.next', 'public'],
};
