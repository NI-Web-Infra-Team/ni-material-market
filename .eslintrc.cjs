process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  root: true,
  extends: [
    'plugin:jsdoc/recommended-error',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:jsonc/recommended-with-jsonc'
  ],
  plugins: ['jsdoc', 'import'],
  rules: {
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@vue/**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@element-plus/**',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['type']
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off'
  },
  overrides: [
    {
      files: ['**/*.cjs', '**/*.cts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['**/*.vue'],
      rules: {
        'import/named': 'off'
      }
    }
  ]
};
