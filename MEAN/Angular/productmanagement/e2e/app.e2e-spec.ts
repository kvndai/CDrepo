import { ProductmanagementPage } from './app.po';

describe('productmanagement App', () => {
  let page: ProductmanagementPage;

  beforeEach(() => {
    page = new ProductmanagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
