// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// const fs = require('fs-extra');

exports.config = {
  allScriptsTimeout: 11000,
//   beforeLaunch: () => {
//     console.log(`\n==========================================================================`);
//     console.log(`\nThe directory './tmp', which holds reports / screenshots is being removed.\n`);
//     console.log(`==========================================================================\n`);
//     fs.removeSync('./.tmp');
// },

  specs: [
    './src/**/*.feature'
  ],
  multiCapabilities: [{
    'browserName': 'firefox',
    'moz:firefoxOptions': {
      args: ['--safe-mode']
    },
    metadata:{
      browser: {
          name: 'firefox'
      },
      device: 'Local testing machine',
      platform: {
          name: 'windows',
          version: '1809'
      },
      application: 'Bookster'
  
}
  }, {
    'browserName': 'chrome',
    chromeOptions: {
          args: ['disable-infobars'],
      },
      metadata:{
        browser: {
            name: 'chrome'
        },
        device: 'Local testing machine',
        platform: {
            name: 'windows',
            version: '1809'
        },
        application: 'Bookster'
    }
  }],
  // capabilities: {
  //   'browserName': 'chrome',
  // chromeOptions: {
  //     args: [ 'disable-infobars']
  // }},
  maxSessions: 2,
  shardTestFiles: true,
  directConnect: true,
  // baseUrl: 'https://www.localhost/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    require: [
      //path starts from this file protractor.conf.js
      './src/steps/*.steps.ts',
      './src/utils/hooks.ts',
      './src/utils/timeout.conf.ts'
    ],
    format: 'json:.tmp/results.json',
    strict: true,
    tags:  ['@bookster']
    
  },

  plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options:{
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        displayDuration: true
    }
}],

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
