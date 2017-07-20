import { GitscorePage } from './app.po';

describe('gitscore App', () => {
  let page: GitscorePage;

  beforeEach(() => {
    page = new GitscorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
