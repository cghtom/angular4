import { StylingPage } from './app.po';

describe('styling App', () => {
  let page: StylingPage;

  beforeEach(() => {
    page = new StylingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
