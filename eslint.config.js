import fsd from '@conarti/eslint-plugin-feature-sliced';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Базовые конфиги
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React конфиг вручную (вместо react.configs.recommended)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Основной конфиг с остальными плагинами
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': refresh,
      '@conarti/feature-sliced': fsd,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@conarti/feature-sliced/layers-slices': [
        'error',
        { layers: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
      ],
      '@conarti/feature-sliced/public-api': 'error',
      '@conarti/feature-sliced/absolute-relative': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      '@conarti/feature-sliced': {
        alias: {
          app: 'src/app',
          pages: 'src/pages',
          widgets: 'src/widgets',
          features: 'src/features',
          entities: 'src/entities',
          shared: 'src/shared',
        },
      },
    },
  }
);