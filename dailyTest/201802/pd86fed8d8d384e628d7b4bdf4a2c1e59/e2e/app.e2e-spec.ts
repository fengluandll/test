import { AppPage } from './app.po';

describe('pd86fed8d8d384e628d7b4bdf4a2c1e59 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
