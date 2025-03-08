const { defineConfig } = require('cypress');

module.exports = defineConfig({
    // reporter: 'cypress-multi-reporters',
    // reporterOptions: {
    //     reporterEnabled: 'cypress-qase-reporter',
    //     cypressQaseReporterReporterOptions: {
    //         mode: "testops",
    //         debug: true,
    //
    //         testops: {
    //             api: {
    //                 token: '<token>',
    //             },
    //
    //             project: '<prj-code>',
    //             uploadAttachments: true,
    //
    //             run: {
    //                 id: <run-id>,
    //                 complete: false,
    //             },
    //         },
    //         framework: {
    //             cypress: {
    //                 screenshotsFolder: 'cypress/screenshots',
    //             }
    //         }
    //     },
    // },
    video: false,
    e2e: {
        testIsolation: false,
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            // require('cypress-qase-reporter/plugin')(on, config)
            // require('cypress-qase-reporter/metadata')(on)
        },
    },
});
