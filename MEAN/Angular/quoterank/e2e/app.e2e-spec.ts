import { QuoterankPage } from './app.po';

describe('quoterank App', () => {
  let page: QuoterankPage;

  beforeEach(() => {
    page = new QuoterankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
