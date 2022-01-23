module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  // Hugo
  goTemplateBracketSpacing: true,
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ],
};
