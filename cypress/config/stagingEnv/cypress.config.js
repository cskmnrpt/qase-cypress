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
                    token: '51f873a278d7c60b4cc3f2e67c536ca8fde30dbb009464b44079737260edd165',
                },

                project: 'QD',
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
