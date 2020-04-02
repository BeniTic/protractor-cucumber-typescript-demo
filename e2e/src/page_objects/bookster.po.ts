import { browser, by, element } from 'protractor';

export class BooksterApp {

  navigateTo(landingPage) {
    return browser.get(landingPage);
  }

  landingPage() {
    return element(by.css('body > div.container-fluid.blade-header-container > div > div:nth-child(1) > div > img'));
  }

  clicklogInButtonLanding() {
    return element(by.css('body > div.container-fluid.blade-header-container > div > div:nth-child(1) > ul > li:nth-child(1) > a')).click();
  }

  userLoginField() {
    return element(by.xpath('//*[@id="username"]'));
  }

  passwLoginField() {
    return element(by.xpath('//*[@id="password"]'));
  }

  clicklogInButton() {
    // tslint:disable-next-line: max-line-length
    return element(by.css('body > div.page-content > div.container.ng-scope > div > div > div.login-container > div > form > div:nth-child(3) > div > input')).click();
  }

  homepageElement() {
    // tslint:disable-next-line: max-line-length
    return element(by.css('body > nav > div > div > div.col-sm-5.col-md-5.col-lg-tmp-a.clearfix > div > a.logo-text.pull-left.hidden-md.hidden-sm.hidden-xs > img')) ;
  }
}
