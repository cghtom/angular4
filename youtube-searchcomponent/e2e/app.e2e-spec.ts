import { YoutubeSearchcomponentPage } from './app.po';

describe('youtube-searchcomponent App', () => {
  let page: YoutubeSearchcomponentPage;

  beforeEach(() => {
    page = new YoutubeSearchcomponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
