import { SimpleRoutingPage } from './app.po';

describe('simple-routing App', () => {
  let page: SimpleRoutingPage;

  beforeEach(() => {
    page = new SimpleRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
