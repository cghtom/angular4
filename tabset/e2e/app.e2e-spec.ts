import { TabsetPage } from './app.po';

describe('tabset App', () => {
  let page: TabsetPage;

  beforeEach(() => {
    page = new TabsetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
