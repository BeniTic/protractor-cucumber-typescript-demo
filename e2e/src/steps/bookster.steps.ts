import { Given, When, Then, Before } from 'cucumber';
import { browser, by } from 'protractor';
import { expect } from 'chai';
import { BooksterApp } from '../page_objects/bookster.po';

let pageObj: BooksterApp;

Before(() => pageObj = new BooksterApp());

Given('I visit the Bookster homepage {string}',
async function (landing) {
  await browser.waitForAngularEnabled(false);
  await pageObj.navigateTo(landing);
  // await browser.manage().window().maximize();
    });

Given('User is on landing page',
async function () {
  await pageObj.landingPage();
    });

When('I Login to bookster with user {string} and pass {string}', async function (usr, psw) {
      console.log('is on Landing page');
      await pageObj.clicklogInButtonLanding();
      await browser.sleep(1000);
      await pageObj.userLoginField().clear();
      await pageObj.userLoginField().sendKeys(usr);
      await pageObj.passwLoginField().clear();
      await pageObj.passwLoginField().sendKeys(psw);
      await browser.sleep(1000);
      await pageObj.clicklogInButton();
      await browser.sleep(3000);
    });

Then('Home page populated',  async function() {
      await pageObj.homepageElement();
      console.log('Home page populated');
      await browser.sleep(1000);
  });

Then('I check rented books', async function() {
    const actualBooks = await browser.element(by.className('col-md-12 section-title ng-binding')).getText();
    console.log(actualBooks);
    await browser.sleep(2000);
        });

Then('User search for book', async function() {
    await browser.findElement(by.css('#frmSearch > div.form-group.has-feedback > input')).click();
    await browser.findElement(by.css('#frmSearch > div.form-group.has-feedback > input')).sendKeys('Tineretea tine de caracter');
    console.log('search tab is displayed');
    await browser.sleep(2000);
    await browser.findElement(by.css('#search-results > li:nth-child(1)')).click();
    await browser.sleep(3000);
    const actualBookname = await browser.element(by.xpath('//*[@id="le_title"]')).getText();
    console.log(actualBookname);
    expect(actualBookname).to.equal('Taineretea tine de caracter'); // added a just for demo
  });

Then('I check acumulated points to be {string}', async function(pnt) {
    // tslint:disable-next-line: max-line-length
    await browser.findElement(by.css('body > nav > div > div > div.master-icons-top-right.clearfix > div.profile-information.pull-right.hidden-xs > div.avatar-holder > a > span')).click();
    // tslint:disable-next-line: max-line-length
    const points = await browser.element(by.css('#top > div.body-content > div > div > div.col-lg-2.col-md-3.col-sm-4.col-profile-navigation > div.container.profile-summary-container > div.row.row-summary-data > div:nth-child(3)')).getText();
    console.log(points);
    expect(points).to.equal(pnt);
});

Then('I select profile', async function() {
  // tslint:disable-next-line: max-line-length
  await browser.findElement(by.css('body > nav > div > div > div.master-icons-top-right.clearfix > div.profile-information.pull-right.hidden-xs > div.avatar-holder > a > span')).click();
});

Then('I check wishlist number of books to be {string}', async function(booknr) {
  // tslint:disable-next-line: max-line-length
  await browser.findElement(by.css('#top > div.body-content > div > div > div.col-lg-2.col-md-3.col-sm-4.col-profile-navigation > div.ng-isolate-scope > div > ul:nth-child(1) > li:nth-child(2)')).click();
  // tslint:disable-next-line: max-line-length
  const actualBooks = await browser.element(by.className('col-md-12 section-title ng-binding')).getText();
  console.log(actualBooks);
  expect(actualBooks).to.equal(booknr);
});
