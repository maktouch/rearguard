module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0, 'always', ['sentence-case', 'start-case', 'lower-case']],
    'subject-case': [
      0,
      'always',
      ['sentence-case', 'start-case', 'lower-case'],
    ],
  },
};
