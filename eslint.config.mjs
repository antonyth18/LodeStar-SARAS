import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import boundaries from 'eslint-plugin-boundaries';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'app/**',
        },
        {
          type: 'feature',
          pattern: 'features/**',
        },
        {
          type: 'service',
          pattern: 'services/**',
        },
        {
          type: 'lib',
          pattern: 'lib/**',
        },
        {
          type: 'component',
          pattern: 'components/**',
        },
        {
          type: 'store',
          pattern: 'stores/**',
        },
        {
          type: 'provider',
          pattern: 'providers/**',
        },
        {
          type: 'type',
          pattern: 'types/**',
        },
        {
          type: 'misc',
          pattern: ['middleware.ts', '*.config.{js,ts,mjs}', 'eslint.config.mjs'],
        },
      ],
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'boundaries/no-unknown': 'warn',
      'boundaries/no-unknown-files': 'off',
      'boundaries/element-types': [
        'error',
        {
          default: 'allow',
          message: '${file.type} is not allowed to import ${dependency.type}',
          rules: [
            {
              from: ['feature'],
              disallow: ['feature'],
              message:
                'Cross-feature imports are not allowed. Use services, common libs, or stores.',
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'src/services/generated/**',
  ]),
]);

export default eslintConfig;
