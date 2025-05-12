import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const compat = new FlatCompat()

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('plugin:react-hooks/recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
]
