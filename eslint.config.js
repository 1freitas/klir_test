import { FlatCompat } from '@eslint/eslintrc'
import mochaPlugin from 'eslint-plugin-mocha'
const compat = new FlatCompat()
export default [
  mochaPlugin.configs.flat.recommended, {
    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-skipped-tests': 'error',
      'mocha/no-mocha-arrows': 'off'
    }
  },
  ...compat.config(
    {
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off'
      }
    })
]