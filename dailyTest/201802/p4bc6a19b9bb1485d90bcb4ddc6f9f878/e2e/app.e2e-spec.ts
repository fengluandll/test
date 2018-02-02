import { AppPage } from './app.po';

describe('p4bc6a19b9bb1485d90bcb4ddc6f9f878 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
