import { BuiltinDirectivesPage } from './app.po';

describe('builtin-directives App', () => {
  let page: BuiltinDirectivesPage;

  beforeEach(() => {
    page = new BuiltinDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
