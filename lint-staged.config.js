module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run typecheck',

  // Lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run lint --fix ${filenames.join(' ')}`,
    `npm run format ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `npm run format ${filenames.join(' ')}`,
};
