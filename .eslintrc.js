module.exports = {
    root: true,
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
      'comma-dangle': ['error', 'never'],
      'import/order': ['error', {
        'groups': ['builtin', 'external', ['sibling', 'parent', 'internal'], 'index'],
        'newlines-between': 'always-and-inside-groups'
      }],
      'object-curly-newline': ['error', { 'consistent': true }],
      'no-class-assign': ['off'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'react/forbid-prop-types': ['off'],
      'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
      'react/jsx-one-expression-per-line': ['off'],
      'react/prop-types': ['off'],
      'semi': ['error', 'never'],
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
      }],
      'react/jsx-props-no-spreading': ['off'],
      'arrow-parens': ['off'],
      'react/jsx-curly-newline': ['off']
    }
  }