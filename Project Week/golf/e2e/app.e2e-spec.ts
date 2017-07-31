import { GolfPage } from './app.po';

describe('golf App', () => {
  let page: GolfPage;

  beforeEach(() => {
    page = new GolfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
