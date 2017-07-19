import { PowerlevelPage } from './app.po';

describe('powerlevel App', () => {
  let page: PowerlevelPage;

  beforeEach(() => {
    page = new PowerlevelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
