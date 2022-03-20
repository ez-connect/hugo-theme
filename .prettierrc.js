module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  // Hugo
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ['*.html', '*.json'],
      options: {
        parser: 'go-template',
      },
    },
  ],
};
