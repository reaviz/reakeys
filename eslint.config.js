import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist/', 'storybook-static/', 'node_modules/'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  ...storybook.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    settings: {
      // reason: eslint-plugin-react@7.37.5 'detect' calls context.getFilename(),
      // removed in eslint 10 (eslint/eslint#20594). Pin explicit version to skip
      // the broken auto-detect path. Drop when the plugin ships eslint-10 support.
      react: { version: '19' }
    },
    rules: {
      'no-unused-vars': 'off',
      // reason: new rule in eslint-plugin-react-hooks 7.x (absent from the 4.6
      // config this is a faithful port of). It fires on the intentional
      // mount-time snapshot of the global hotkeys array into state in
      // useHotkeys.ts; fixing it would be a behavioral change to the published
      // hook, out of scope for the config migration. Revisit separately.
      'react-hooks/set-state-in-effect': 'off'
    }
  }
);
