import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  prettierConfig,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        'import.meta': 'readonly',
        require: true,
        module: true,
        describe: true,
        test: true,
        it: true,
        expect: true,
        process: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
