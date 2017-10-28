import { AsyncHttpPage } from './app.po';

describe('async-http App', () => {
  let page: AsyncHttpPage;

  beforeEach(() => {
    page = new AsyncHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
