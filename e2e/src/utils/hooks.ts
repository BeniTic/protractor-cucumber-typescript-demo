import { browser } from 'protractor';
import { setDefaultTimeout } from 'cucumber';
const { After, Status } = require('cucumber');

setDefaultTimeout(15000);
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
       // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, 'image/png');
       }
    });
