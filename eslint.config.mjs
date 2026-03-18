import eslintPluginAstro from 'eslint-plugin-astro'
import neostandard from 'neostandard'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'pnpm-lock.yaml'],
  },

  ...neostandard(),
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

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
      '@stylistic/jsx-pascal-case': 'off',
    },
  },

  {
    files: ['**/*.astro', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      // General rules
    },
  },

  eslintConfigPrettier,
]
