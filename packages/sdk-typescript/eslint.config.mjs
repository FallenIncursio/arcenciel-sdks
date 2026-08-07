import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['src/client.ts', 'src/errors.ts', 'tests/**/*.ts'],
  languageOptions: {
    globals: { ...globals.browser, ...globals.node },
  },
})
