# Cypress with cypress-parallel

This is a simple example of how to run Cypress tests in parallel
using [cypress-parallel](https://www.npmjs.com/package/cypress-parallel)

The reporter will work with this library only if it uploads results to an existing test run.

What needs to be done:

1. Add a config.json file specifying the configuration for cypress-multi-reporters. The config should include the test
   run ID and have automatic test run completion disabled.
2. Remove all code related to the reporter from cypress.config.js.
3. Add a script to package.json for running tests in parallel mode with the specified config:

```json
  "scripts": {
"cy:run": "cypress run",
"cy:parallel": "cypress-parallel -s cy:run -t 4 -v -p ./config.json -d cypress/e2e"
},
```
