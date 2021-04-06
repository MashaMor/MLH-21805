exports.config = {
    runner: 'local',
    specs: [
        './test/smoke/*.js',
        './test/extended/*.js',
    ],
    exclude: [
        // './test/smoke/elementsExist.js',
        // './test/smoke/labelsCorrect.js',
        // './test/smoke/smokeFunctional.js',
        // './test/extended/age.js',
        // './test/extended/gender.js',
        // './test/extended/image.js',
        // './test/extended/name.js',
        // './test/extended/reset.js',
        // './test/extended/storyPart1.js',
        // './test/extended/storyPart2.js',
        // './test/extended/storyPart3.js',
        // './test/extended/submit.js',
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://qa-apps.netlify.app/hero/fix',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec','dot'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
}
