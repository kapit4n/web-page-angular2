import { ScotchyScotchPage } from './app.po';

describe('scotchy-scotch App', function() {
  let page: ScotchyScotchPage;

  beforeEach(() => {
    page = new ScotchyScotchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
