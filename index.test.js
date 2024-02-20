const { RuleTester } = require('eslint');
const rule = require('./index.js');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: 'module' },
});

ruleTester.run('no-direct-intl-numberformat', rule, {
  valid: [
    // Add code snippets that should pass your rule here
    "let numberFormat = globalIntlFormatter.getFormatter();",
    "let formatter = new SomeOtherConstructor();"
  ],
  invalid: [
    // Add code snippets that should fail your rule here
    {
      code: "let formatter = new Intl.NumberFormat('en-us', {currency: 'US'});",
      errors: [{ message: 'Use globalIntlFormatter.getFormatter() instead of new Intl.NumberFormat().' }]
    }
  ]
});

console.log("All tests passed!");

