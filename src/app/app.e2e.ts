import { animate } from '@angular/core';
import { browser, by, element } from 'protractor';

describe('App, before auth, ', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Nobel Price App';
    expect(subject).toEqual(result);
  });

  it('should have toolbar - login', () => {
    let subject = element(by.css('p-toolbar login')).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

  it('shouldn\'t have h2', () => {
    let subject = element(by.css('main h2')).isPresent();
    expect(subject).toEqual(false);
  });

});

describe('App, after auth, ', () => {

  beforeEach(() => {
    browser.get('/');
    let un = element(by.css('input[name=username]'));
    let ps = element(by.css('input[name=password]'));
    let li = element(by.css('a.btn'));
    un.sendKeys('admin');
    ps.sendKeys('admin');
  });

  it('should have a user name = admin', () => {
    element(by.css('a.btn')).click().then(() => {
      let lin = element(by.css('login b')).getText();
      let result = 'admin';
      expect(lin).toEqual(result);
    });
  });


});
