import {expect} from 'chai';
import { browser, by, element } from 'protractor';
import { Before, Given, When, Then} from 'cucumber';
import { BlurAdminPO } from '../page_objects/bluradmin.po';

let pageObj: BlurAdminPO;

Before(() => pageObj = new BlurAdminPO());

    Given('I visit the BlurAdmin homepage {string}', async function(homepage) {
        // await browser.waitForAngularEnabled(true);
        await pageObj.navigateTo(homepage);
        await browser.manage().window().maximize();
        await browser.sleep(5000);
        console.log('HomePage visited');
    });

    Given('I check dashboard title is visible', async function() {
        const greeting = await pageObj.dashboardElement();
        await expect(greeting).to.equal('DASHBOARD');
        console.log('Title was Found!!!!');
        console.log(`This platform is ${process.platform}`);
    });

    Given('I check feed messages list is visible', async function () {
         // tslint:disable-next-line: max-line-length
        const feed = element(by.css('body > main > div > div > div > div:nth-child(3) > div.col-xlg-3.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div > div.panel-body > blur-feed > div'));
        await expect(feed.isDisplayed());
        await console.log('Feed was Found!!!!');
    });

    When('I click on the first message',
     async function () {
        // tslint:disable-next-line: max-line-length
        const feedmessage = element(by.css('body > main > div > div > div > div:nth-child(3) > div.col-xlg-3.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div > div.panel-body > blur-feed > div > div:nth-child(1) > div.text-block.text-message > div.message-content.line-clamp.ng-binding'));
        console.log('Feed message was Found!!!!');
        await feedmessage.click();
        await browser.sleep(2000);
        await console.log('Feed message click!!!');
    });

    Then('I check the content message matches',
     async function() {
         // tslint:disable-next-line: max-line-length
        const feedmessage = await (element(by.css('body > main > div > div > div > div:nth-child(3) > div.col-xlg-3.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div > div.panel-body > blur-feed > div > div:nth-child(1) > div.text-block.text-message > div.message-content.line-clamp.ng-binding')).getText());
        const lmessageToMatch = 'Guys, check this out: A police officer';
        console.log(feedmessage);
        expect(feedmessage).to.contain(lmessageToMatch);
        console.log('Message matches!!!!');
    });

    When('I click on second message',
     async function ()  {
         // tslint:disable-next-line: max-line-length
        const feedmessage = element(by.css('body > main > div > div > div > div:nth-child(3) > div.col-xlg-3.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div > div.panel-body > blur-feed > div > div:nth-child(2) > div.text-block.text-message > div.message-content.line-clamp.ng-binding.line-clamp-2'));
        console.log('Feed second message was Found!!!!');
        await feedmessage.click();
        await browser.sleep(2000);
        console.log('Feed message click!!!');
    });

    Then('I click on content video',
     async function() {
        // tslint:disable-next-line: max-line-length
        const feedmessage = element(by.css('body > main > div > div > div > div:nth-child(3) > div.col-xlg-3.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div > div.panel-body > blur-feed > div > div:nth-child(2) > div.text-block.text-message > div.preview.ng-scope'));
        await feedmessage.click();
        await browser.sleep(5000);
        console.log('Video selected');
    });

    Then('I check redirect link',
     async function() {
        browser.getAllWindowHandles().then(async function(handles) {
            const newTabHandle = handles[1];
            browser.switchTo().window(newTabHandle).then(async function () {
                // Expect the newly opened tab URL to equal the href of the invitation
                await expect(browser.driver.getCurrentUrl()).to.contain('http://...');
                const url = await browser.getCurrentUrl();
                console.log(url);
            });
        });
        // const url = await browser.getCurrentUrl();
        // console.log(url);
        // await browser.sleep(5000);
        //  console.log('Video selected');
    });
