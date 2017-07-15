import { FirstAppAppPage } from './app.po';

describe('first-app-app App', () => {
  let page: FirstAppAppPage;

  beforeEach(() => {
    page = new FirstAppAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
