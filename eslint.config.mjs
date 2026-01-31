import eslintPluginAstro from 'eslint-plugin-astro'
import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'pnpm-lock.yaml'],
  },

  ...neostandard(),

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    rules: {
      'react/self-closing-comp': 'off',
      'react/jsx-key': 'off',
      '@stylistic/jsx-first-prop-new-line': 'off',
      '@stylistic/jsx-closing-tag-location': 'off',
      '@stylistic/jsx-closing-bracket-location': 'off',
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/jsx-pascal-case': 'off',
    },
  },

  ...eslintPluginAstro.configs.recommended,

  {
    files: ['**/*.astro', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-indent': 'off',
      '@stylistic/space-before-function-paren': 'off',
    },
  },
]
