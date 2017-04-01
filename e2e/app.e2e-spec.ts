import { CreativeDashboardPage } from './app.po';

describe('creative-dashboard App', function() {
  let page: CreativeDashboardPage;

  beforeEach(() => {
    page = new CreativeDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
