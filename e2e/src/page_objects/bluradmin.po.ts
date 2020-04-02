import { browser, by, element } from 'protractor';

export class BlurAdminPO {

  navigateTo(landingPage) {
    return browser.get(landingPage);
  }
  dashboardElement() {
    return element(by.css('body > main > div > div > content-top > div > h1')).getText();
  }
}
