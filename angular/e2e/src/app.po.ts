import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link) {
    return browser.get(browser.baseUrl + link) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
