const {defineConfig} = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'cypress-qase-reporter',
        cypressQaseReporterReporterOptions: {
            mode: "testops",
            debug: true,
            environment: "local",

            testops: {
                api: {
                    token: '45a0b4c1e0cc6c64580a82565d939779490097e0d7a7d8ccfe77393346b426fb',
                },

                project: 'DEVX',
                uploadAttachments: true,

                run: {
                    complete: true,
                },
            },

            framework: {
                cypress: {
                    screenshotsFolder: 'cypress/screenshots',
                }
            }
        },
    },
    video: false,
    e2e: {
        testIsolation: false,
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            require('cypress-qase-reporter/plugin')(on, config)
            require('cypress-qase-reporter/metadata')(on)
        },
    },
});
