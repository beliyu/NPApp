import { browser, by, element } from 'protractor';

xdescribe('Home ', () => {

  beforeEach(() => {
    browser.get('/');
    let un = element(by.css('input[name=username]'));
    let ps = element(by.css('input[name=password]'));
    un.sendKeys('admin');
    ps.sendKeys('admin');
  });

  it('should have a title', () => {
    element(by.css('a.btn')).click().then(() => {
      let lin = element(by.css('main h2')).getText();
      let result = 'Nobel Prices list';
      expect(lin).toEqual(result);
    });
  });

  it('should have a image', () => {
    element(by.css('a.btn')).click().then(() => {
      let lin = element(by.css('main img')).isPresent();
      expect(lin).toEqual(true);
    });
  });

  it('filter first name = Kofi', () => {
    element(by.css('a.btn')).click().then(() => {
      let fn = element.all(by.css('table thead input')).get(0);
      fn.sendKeys('Kofi');
      let sn = element.all(by.css('table tbody tr')).count();
      expect(sn).toEqual(1);
    });
  });

});
