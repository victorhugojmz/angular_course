import { AngularClassPage } from './app.po';

describe('angular-class App', function() {
  let page: AngularClassPage;

  beforeEach(() => {
    page = new AngularClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
