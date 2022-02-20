module.exports = {
  extends: ['./eslintrc-base.js', 'plugin:tailwind/recommended', 'next'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['import-alias', 'import-name', 'simple-import-sort'],
  rules: {
    'import-alias/import-alias': ['warn', { relativeDepth: 2, rootDir: resolve(rootDir) }],

    'import-name/default-import-name': ['error', { classnames: 'cx' }],

    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
  overrides: [
    {
      files: ['./**/__tests__/**/*'],
      rules: { '@typescript-eslint/no-explicit-any': 'off' },
    },
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
    {
      files: ['*.tsx', '*.ts'],
      rules: { complexity: ['error', 16] },
    },
  ],
};
