# Cypress with cypress-parallel

This is an example project to demonstrate how `qase-cypress` works with [cypress-parallel](https://www.npmjs.com/package/cypress-parallel) library.

Please note, the reporter will only work with this library only if it uploads results to an existing test run. 

You can manually provide the run id in the reporter's config options, or use a prior step to create a Qase test run and set the resultant run id against the environment variable `QASE_TESTOPS_RUN_ID`.

You may also use this GitHub action in your workflow to create a test run. 

To use `cypress-parallel` in a project with `qase-cypress` reporters, follow these steps:

1. Add a `config.json` file specifying the configuration for `cypress-multi-reporters`. The config should include the test run ID and [run complete option should be disabled](https://github.com/cskmnrpt/qase-cypress/blob/eed2b67077f37beda6577002f089d3cf8a747381/config.json#L14).
2. Remove all code related to the reporter from cypress.config.js.
3. Add a script to `package.json` for running tests in parallel mode with the specified config:

```json
  "scripts": {
"cy:run": "cypress run",
"cy:parallel": "cypress-parallel -s cy:run -t 4 -v -p ./config.json -d cypress/e2e"
},
```
