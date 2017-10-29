import { MusicSearchPage } from './app.po';

describe('music-search App', () => {
  let page: MusicSearchPage;

  beforeEach(() => {
    page = new MusicSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
