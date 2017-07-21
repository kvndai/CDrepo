import { DojoweatherPage } from './app.po';

describe('dojoweather App', () => {
  let page: DojoweatherPage;

  beforeEach(() => {
    page = new DojoweatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
