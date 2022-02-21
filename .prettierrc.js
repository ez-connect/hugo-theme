module.exports = {
  bracketSpacing: true,
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
