import { IdeaValidatorPage } from './app.po';

describe('idea-validator App', () => {
  let page: IdeaValidatorPage;

  beforeEach(() => {
    page = new IdeaValidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
